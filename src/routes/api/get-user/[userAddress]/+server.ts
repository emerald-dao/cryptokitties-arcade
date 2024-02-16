import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { error as err } from '@sveltejs/kit';

export async function GET({ params }) {
	const { userAddress } = params;
	
	const { data, error } = await serviceSupabase
			.from('users')
			.select(`address`)
			.eq('address', userAddress)

	if (error) {
		throw err(400, "Couldn't fetch user");
	}

	return new Response(JSON.stringify(data));
}