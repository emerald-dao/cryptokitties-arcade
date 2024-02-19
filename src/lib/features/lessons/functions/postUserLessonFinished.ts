import type { CurrentUserObject } from '@onflow/fcl';

export const addUserLessonFinished = async (user: CurrentUserObject, lessonSlug: string) => {
	const res = await fetch('/api/add-user-lesson-finished', {
		method: 'POST',
		body: JSON.stringify({
			user,
            lessonSlug
		}),
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	return response;
};
