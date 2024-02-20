import { json, error } from '@sveltejs/kit';
import { getCoursesOverviews } from './_functions/get/getCoursesOverviews';
import { getAmountOfLessons } from './_functions/get/getAmountOfLessons';

export const GET = async () => {
	try {
		const coursesOverviews = await getCoursesOverviews();
		const amountOfLessons = await getAmountOfLessons();
		return json({ coursesOverviews, amountOfLessons });
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
