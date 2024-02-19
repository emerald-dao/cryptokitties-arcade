export const checkUser = async (userAddress: string | null | undefined) => {
	const res = await fetch(`/api/get-user/${userAddress}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	return response;
};

