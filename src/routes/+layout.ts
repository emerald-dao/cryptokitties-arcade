import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface.js';

export async function load({ fetch }) {
	const res = await fetch('/api/courses');
	const {
		coursesOverviews,
		amountOfLessons,
		coursesWithAmountOfLessons
	}: {
		coursesOverviews: CourseOverviewWithSlug[];
		amountOfLessons: number;
		coursesWithAmountOfLessons: { [slug: string]: number };
	} = await res.json();

	return {
		courses: coursesOverviews,
		amountOfLessons,
		coursesWithAmountOfLessons
	};
}
