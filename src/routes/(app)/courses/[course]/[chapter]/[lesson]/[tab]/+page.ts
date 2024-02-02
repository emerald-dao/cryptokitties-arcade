import type { LessonTabType } from '$courses/constants/lessonTabTypes.js';
import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface.js';
import { error } from '@sveltejs/kit';
import type { TabContent, TabContentWithType } from './_types/tab-content.type.js';

export const load = async ({ params, fetch }) => {
	try {
		const res = await fetch(
			`/api/courses/${params.course}/chapters/${params.chapter}/lessons/${params.lesson}/tabs/${params.tab}`
		);
		const tabOverview: LessonTabOverviewWithSlug = await res.json();

		const tabContent = await getTabContent(
			params.course,
			params.chapter,
			params.lesson,
			params.tab,
			tabOverview.type
		);

		return {
			tabOverview,
			tabContent: {
				type: tabOverview.type,
				content: tabContent
			} as TabContentWithType
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
};

const getTabContent = async (
	courseSlug: string,
	chapterSlug: string,
	lessonSlug: string,
	tabSlug: string,
	type: LessonTabType
): Promise<TabContent> => {
	switch (type) {
		case 'component':
			return (
				await import(
					`../../../../../../../courses/content/${courseSlug}/${chapterSlug}/${lessonSlug}/${tabSlug}/Component.svelte`
				)
			).default;
		case 'code':
			return {
				startingCode: (
					await import(
						`../../../../../../../courses/content/${courseSlug}/${chapterSlug}/${lessonSlug}/${tabSlug}/code.cdc?raw`
					)
				).default,
				solutionCode: (
					await import(
						`../../../../../../../courses/content/${courseSlug}/${chapterSlug}/${lessonSlug}/${tabSlug}/code-solution.cdc?raw`
					)
				).default
			};
		default:
			throw new Error(`Unknown tab type: ${type}`);
	}
};
