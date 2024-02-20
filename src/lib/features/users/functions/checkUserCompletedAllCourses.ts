export const userCompletedAllCourses = async (
	userAddress: string | null | undefined,
	amountOfLessons: number
) => {
	const res = await fetch(`/api/user-completed-lessons/${userAddress}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	if (amountOfLessons === response.length) {
		return true;
	}
	return false;
};
