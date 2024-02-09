import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { lessonOverview } = await parent();

	if (lessonOverview) {
		throw redirect(302, `/courses/${lessonOverview.tabs[0].slug}`);
	}
	return {};
}
