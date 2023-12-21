import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface.js';

export async function load({ fetch, params }) {
	const overviewRes = await fetch(
		`/api/courses/${params.course}/chapters/${params.chapter}/lessons/${params.lesson}`
	);
	const lessonOverview: LessonOverviewWithTabs = await overviewRes.json();

	const lessonContent = (
		await import(
			`../../../../../../courses/content/${params.course}/${params.chapter}/${params.lesson}/content.md`
		)
	).default as ConstructorOfATypedSvelteComponent;

	return {
		lessonOverview,
		lessonContent
	};
}
