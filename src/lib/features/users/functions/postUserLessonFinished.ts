import type { CurrentUserObject } from '@onflow/fcl';

export const addUserToLesson = async (user: CurrentUserObject, lessonSlug: string) => {
	const res = await fetch('/api/user-lesson-finished', {
		method: 'POST',
		body: JSON.stringify({
			user: user,
            lessonSlug: lessonSlug
		}),
		headers: {
			'content-type': 'application/json'
		}
	});

	const response = await res.json();

	return response;
};
