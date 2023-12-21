import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface.js';

export async function load({ fetch, params }) {
	const res = await fetch(
		`/api/courses/${params.course}/chapters/${params.chapter}/lessons/${params.lesson}`
	);
	const lessonOverview: LessonOverviewWithTabs = await res.json();

	return {
		lessonOverview
	};
}
