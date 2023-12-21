import type { LessonTabOverviewWithSlug } from './lesson-tab-overview.interface';

export interface LessonOverview {
	name: string;
}

export interface LessonOverviewWithSlug extends LessonOverview {
	slug: string;
}

export interface LessonOverviewWithTabs extends LessonOverviewWithSlug {
	tabs: LessonTabOverviewWithSlug[];
}
