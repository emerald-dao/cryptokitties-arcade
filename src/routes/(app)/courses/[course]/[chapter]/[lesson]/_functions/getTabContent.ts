import type { LessonTabType } from '$courses/constants/lessonTabTypes';
import type { TabContent } from '../[tab]/_types/tab-content.type';

export const getTabContent = async (
	courseSlug: string,
	chapterSlug: string,
	lessonSlug: string,
	tabSlug: string,
	type: LessonTabType,
	onlyCodeTabs: boolean = false
): Promise<TabContent> => {
	switch (type) {
		case 'component':
			if (!onlyCodeTabs) {
				return (
					await import(
						`../../../../../../../courses/content/${courseSlug}/${chapterSlug}/${lessonSlug}/${tabSlug}/Component.svelte`
					)
				).default;
			} else {
				throw new Error(`Unknown tab type: ${type}`);
			}

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
