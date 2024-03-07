import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface.js';
import { getTabContent } from './_functions/getTabContent.js';

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

	const codeTabsContent = [];

	for (const tab of lessonOverview.tabs) {
		const slugParts = tab.slug.split('/');
		const lastSlugPart = slugParts[slugParts.length - 1];

		if (tab.type === 'code') {
			const tabContent = await getTabContent(
				params.course,
				params.chapter,
				params.lesson,
				lastSlugPart,
				tab.type,
				true
			);

			if (
				tabContent !== null &&
				typeof tabContent === 'object' &&
				'startingCode' in tabContent &&
				'solutionCode' in tabContent
			) {
				codeTabsContent.push(tabContent);
			}
		}
	}

	return {
		lessonOverview,
		lessonContent,
		codeTabsContent
	};
}
