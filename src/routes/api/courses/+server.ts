import { json, error } from '@sveltejs/kit';
import { getCoursesOverviews } from './_functions/get/getCoursesOverviews';
import { getAmountOfLessons } from './_functions/get/getAmountOfLessons';
import { getCourseAmountOfLessons } from './_functions/get/getCourseAmountOfLessons';

export const GET = async () => {
	try {
		const coursesOverviews = await getCoursesOverviews();
		const coursesAmountOfLessons: { [slug: string]: number } = {}; // Definimos directamente el tipo del diccionario

		for (let i = 0; i < coursesOverviews.length; i++) {
			const course = coursesOverviews[i];
			const amount = await getCourseAmountOfLessons(course.slug);
			coursesAmountOfLessons[course.slug] = amount; // Almacenar slug y cantidad de lecciones en el objeto
		}
		const amountOfLessons = await getAmountOfLessons();
		return json({ coursesOverviews, amountOfLessons, coursesAmountOfLessons });
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
