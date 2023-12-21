import { json, error } from '@sveltejs/kit';
import { getLessonsOverviewsFromChapter } from '../../../../_functions/get/getLessonsOverviewsFromChapter.js';

export const GET = async ({ params }) => {
	try {
		const lessonsOverviews = await getLessonsOverviewsFromChapter(params.course, params.chapter);

		return json(lessonsOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
