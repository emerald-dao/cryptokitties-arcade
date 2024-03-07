import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface.js';
import { error } from '@sveltejs/kit';
import type { TabContentWithType } from './_types/tab-content.type.js';
import { getTabContent } from '../_functions/getTabContent.js';

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
