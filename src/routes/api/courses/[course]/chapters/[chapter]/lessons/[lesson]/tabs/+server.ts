import { json, error } from '@sveltejs/kit';
import { getTabsOverviewsFromLesson } from '../../../../../../_functions/get/getTabsOverviewsFromLesson.js';

export const GET = async ({ params }) => {
	try {
		const tabsOverviews = await getTabsOverviewsFromLesson(
			params.course,
			params.chapter,
			params.lesson
		);

		return json(tabsOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
