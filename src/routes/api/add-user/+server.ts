import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { verifyAccountOwnership } from '../../../flow/utils.js';

export async function POST({ request }) {
	const data = await request.json();

	// Make sure a valid user was passed in
	const verifyAccount = await verifyAccountOwnership(data.user);
	if (!verifyAccount) {
		return new Response(JSON.stringify({ error: 'Error verifying user' }), { status: 401 });
	}

	const { error } = await serviceSupabase.from('users').insert({
		address: data.user.addr
	});

	if (error) {
		return new Response(JSON.stringify({ error: 'Error inserting user' }), { status: 401 });
	} else {
		return new Response(JSON.stringify({ success: 'User added' }), { status: 201 });
	}
}
