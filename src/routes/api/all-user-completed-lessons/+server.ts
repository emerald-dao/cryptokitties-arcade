import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { error as err } from '@sveltejs/kit';

export async function GET() {
	const { data, error } = await serviceSupabase.from('users_lessons_finished').select(`*`);

	if (error) {
		throw err(404, "Couldn't fetch data");
	}
	return new Response(JSON.stringify(data));
}
