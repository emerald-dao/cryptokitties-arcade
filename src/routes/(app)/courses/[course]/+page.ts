import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { course } = await parent();

	if (course) {
		throw redirect(302, `/courses/${course.chapters[0].slug}`);
	}
	return {};
}
