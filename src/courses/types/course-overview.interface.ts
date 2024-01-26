import type { CourseColor } from '$courses/constants/colors';
import type { ChapterOverviewWithLessons } from './chapter-overview.interface';

export interface CourseOverview {
	name: string;
	excerpt: string;
	subject: string;
	color: CourseColor;
}

export interface CourseOverviewWithSlug extends CourseOverview {
	slug: string;
}

export interface CourseOverviewWithChapters extends CourseOverviewWithSlug {
	chapters: ChapterOverviewWithLessons[];
}
