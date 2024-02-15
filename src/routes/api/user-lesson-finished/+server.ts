import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { verifyAccountOwnership } from '../../../flow/utils.js';

export async function POST({ request }) {
	const data = await request.json();

	const verifyAccount = await verifyAccountOwnership(data.user);
	if (!verifyAccount) {
		return new Response(JSON.stringify({ error: 'Error verifying user' }), { status: 401 });
	}

	const { error } = await serviceSupabase.from('users_lessons_finished').insert({
		user_address: data.user.addr,
        lesson_slug: data.lessonSlug
	});

	if (error) {
		return new Response(JSON.stringify({ error: 'Error inserting user to lesson' }), { status: 401 });
	} else {
		return new Response(JSON.stringify({ success: 'User to lesson added' }), { status: 201 });
	}
}