import type { CurrentUserObject } from '@onflow/fcl';

export const addUser = async (user: CurrentUserObject) => {
	const res = await fetch('/api/add-user', {
		method: 'POST',
		body: JSON.stringify({
			user
		}),
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	return response;
};
