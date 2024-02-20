export const userCompletedAllCourseLessons = async (
	userAddress: string | null | undefined,
	courseSlug: string,
	amountOfLessons: number
) => {
	const res = await fetch(`/api/user-completed-lessons/${userAddress}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	const finishedCourseLessons = response.filter((res: { lesson_slug: string }) =>
		res.lesson_slug.includes(courseSlug)
	);

	if (amountOfLessons === finishedCourseLessons.length) {
		return true;
	}
	return false;
};
