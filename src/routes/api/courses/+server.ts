import { json, error } from '@sveltejs/kit';
import { getCoursesOverviews } from './_functions/get/getCoursesOverviews';
import { getAmountOfLessons } from './_functions/get/getAmountOfLessons';
import { getCourseAmountOfLessons } from './_functions/get/getCourseAmountOfLessons';

export const GET = async () => {
	try {
		const coursesOverviews = await getCoursesOverviews();
		const coursesAmountOfLessons: { [slug: string]: number } = {};
		const totalAmountOfLessons = await getAmountOfLessons();

		for (let i = 0; i < coursesOverviews.length; i++) {
			const course = coursesOverviews[i];
			const amount = await getCourseAmountOfLessons(course.slug);
			coursesAmountOfLessons[course.slug] = amount;
		}

		return json({ coursesOverviews, totalAmountOfLessons, coursesAmountOfLessons });
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
