import { json, error } from '@sveltejs/kit';
import { getCoursesOverviews } from './_functions/get/getCoursesOverviews';

export const GET = async () => {
	try {
		const coursesOverviews = await getCoursesOverviews();

		return json(coursesOverviews);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
