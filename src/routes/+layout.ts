import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface.js';

export async function load({ fetch }) {
	const res = await fetch('/api/courses');
	const {
		coursesOverviews,
		amountOfLessons,
		coursesAmountOfLessons
	}: {
		coursesOverviews: CourseOverviewWithSlug[];
		amountOfLessons: number;
		coursesAmountOfLessons: { [slug: string]: number };
	} = await res.json();

	return {
		courses: coursesOverviews,
		amountOfLessons,
		coursesAmountOfLessons
	};
}
