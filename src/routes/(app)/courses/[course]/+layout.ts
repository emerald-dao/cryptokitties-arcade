import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface.js';

export async function load({ fetch, params }) {
	const res = await fetch(`/api/courses/${params.course}`);
	const course: CourseOverviewWithChapters = await res.json();
	return {
		course
	};
}
