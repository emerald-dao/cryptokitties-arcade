export const getUserCompletedLessons = async (userAddress: string | null | undefined) => {
	let finishedLessons: string[] = [];

	if (userAddress) {
		const res = await fetch(`/api/user-completed-lessons/${userAddress}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		const response = await res.json();

		for (let i = 0; i < response.length; i++) {
			finishedLessons.push(response[i].lesson_slug);
		}
	}
	return finishedLessons;
};
