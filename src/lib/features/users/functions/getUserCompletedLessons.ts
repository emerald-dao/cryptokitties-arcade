export const getUserCompletedLessons = async (userAddress: string | null | undefined) => {
	const res = await fetch(`/api/user-completed-lessons/${userAddress}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	let finishedLessons: string[] = [];

	for (let i = 0; i < response.length; i++) {
		finishedLessons.push(response[i].lesson_slug);
	}

	return finishedLessons;
};
