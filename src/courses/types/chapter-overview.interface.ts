import type { LessonOverviewWithSlug } from './lesson-overview.interface';
export interface ChapterOverview {
	name: string;
	title: string
}

export interface ChapterOverviewWithSlug extends ChapterOverview {
	slug: string;
}

export interface ChapterOverviewWithLessons extends ChapterOverviewWithSlug {
	lessons: LessonOverviewWithSlug[];
}
