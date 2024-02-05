import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { chapter } = await parent();

	if (chapter) {
		throw redirect(302, `/courses/${chapter.lessons[0].slug}`);
	}
	return {};
}
