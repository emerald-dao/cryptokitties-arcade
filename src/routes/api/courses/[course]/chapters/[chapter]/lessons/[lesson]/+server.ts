import { json, error } from '@sveltejs/kit';
import { getLessonOverview } from '../../../../../_functions/get/getOverview.js';
import { getTabsOverviewsFromLesson } from '../../../../../_functions/get/getTabsOverviewsFromLesson.js';

export const GET = async ({ params }) => {
	try {
		const lessonOverview = await getLessonOverview(params.course, params.chapter, params.lesson);
		const lessonTabsOverviews = await getTabsOverviewsFromLesson(
			params.course,
			params.chapter,
			params.lesson
		);

		return json({ ...lessonOverview, tabs: lessonTabsOverviews });
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
