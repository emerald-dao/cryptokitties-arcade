export const userCompletedLesson = async (userAddress: string | null | undefined, lessonSlug: string) => {
	const res = await fetch(`/api/user-completed-lesson/${userAddress}/lesson/${lessonSlug}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

    if(response.length==0){
        return false;
    }
	return true;
};