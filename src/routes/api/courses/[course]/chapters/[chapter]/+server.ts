import { json, error } from '@sveltejs/kit';
import { getChapterOverview } from '../../../_functions/get/getOverview.js';
import { getLessonsOverviewsFromChapter } from '../../../_functions/get/getLessonsOverviewsFromChapter.js';

export const GET = async ({ params }) => {
	try {
		const chapterOverview = await getChapterOverview(params.course, params.chapter);
		const lessonsOverviews = await getLessonsOverviewsFromChapter(params.course, params.chapter);

		return json({ ...chapterOverview, lessons: lessonsOverviews });
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
