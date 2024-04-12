import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { error as err } from '@sveltejs/kit';

export async function GET({ params }) {
	const { userAddress } = params;
	const { data, error } = await serviceSupabase
		.from('users_lessons_finished')
		.select(`lesson_slug, created_at`)
		.eq('user_address', userAddress);

	if (error) {
		throw err(404, "Couldn't fetch user");
	}
	return new Response(JSON.stringify(data));
}
