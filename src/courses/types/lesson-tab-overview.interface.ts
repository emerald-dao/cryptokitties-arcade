import type { LessonTabType } from '$courses/constants/lessonTabTypes';

export interface LessonTabOverview {
	name: string;
	type: LessonTabType;
}

export interface LessonTabOverviewWithSlug extends LessonTabOverview {
	slug: string;
}
