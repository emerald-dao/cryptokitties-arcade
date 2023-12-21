import { json, error } from '@sveltejs/kit';
import { getChaptersOverviewsFromCourse } from '../../_functions/get/getChaptersOverviewsFromCourse';

export const GET = async ({ params }) => {
	try {
		const chaptersOverviews = await getChaptersOverviewsFromCourse(params.course);

		return json(chaptersOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
