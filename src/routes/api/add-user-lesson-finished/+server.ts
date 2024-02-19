import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { verifyAccountOwnership } from '../../../flow/utils.js';

export async function POST({ request }) {
    const data = await request.json();

    // Make sure a valid user was passed in
    const verifyAccount = await verifyAccountOwnership(data.user);
    if (!verifyAccount) {
        return new Response(JSON.stringify({ error: 'Error verifying user' }), { status: 401 });
    }

    const { data: existingRecords, error } = await serviceSupabase
        .from('users_lessons_finished')
        .select('user_address')
        .eq('user_address', data.user.addr)
        .eq('lesson_slug', data.lessonSlug);

    if (error) {
        return new Response(JSON.stringify({ error: 'Error querying database' }), { status: 500 });
    }

    if (existingRecords.length === 0) {
        const { error } = await serviceSupabase.from('users_lessons_finished').insert({
            user_address: data.user.addr,
            lesson_slug: data.lessonSlug
        });

        if (error) {
            return new Response(JSON.stringify({ error: 'Error inserting user lesson finished' }), { status: 401 });
        } else {
            return new Response(JSON.stringify({ success: 'User lesson finished added' }), { status: 201 });
        }
    } else {
        return new Response(JSON.stringify({ error: 'Record already exists' }), { status: 409 });
    }
}
