import { json, error } from '@sveltejs/kit';
import { getCourseOverview } from '../_functions/get/getOverview';
import { getChaptersOverviewsFromCourse } from '../_functions/get/getChaptersOverviewsFromCourse';

export const GET = async ({ params }) => {
	try {
		const courseOverview = await getCourseOverview(params.course);

		console.log(courseOverview);

		const chaptersOverviews = await getChaptersOverviewsFromCourse(params.course);

		return json({ ...courseOverview, chapters: chaptersOverviews });
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
