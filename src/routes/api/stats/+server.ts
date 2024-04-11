import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { error as err } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const response = await fetch('https://flownaut.ecdao.org/api/completions/accounts');
		const flownautUniqueAddresses = await response.json();

		const { error, count: cryptoKittiesUniqueAddresses } = await serviceSupabase
			.from('users')
			.select('*', { count: 'exact' });

		if (error) {
			throw err(400, "Couldn't count users");
		}

		const responseData = {
			flownautUniqueAddresses,
			cryptoKittiesUniqueAddresses,
			total: flownautUniqueAddresses + cryptoKittiesUniqueAddresses
		};

		return new Response(JSON.stringify(responseData));
	} catch (error) {
		console.error('Error:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
	}
};
