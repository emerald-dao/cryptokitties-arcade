import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';
import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
import type { LessonOverviewWithSlug } from '$courses/types/lesson-overview.interface';

export const getCourseOverview = async (courseSlug: string): Promise<CourseOverviewWithSlug> => {
	const { overview } = await import(`../../../../../courses/content/${courseSlug}/overview.ts`);

	return {
		...overview,
		slug: `${courseSlug}`
	};
};

export const getChapterOverview = async (
	courseSlug: string,
	chapterSlug: string
): Promise<ChapterOverviewWithSlug> => {
	const { overview } = await import(
		`../../../../../courses/content/${courseSlug}/${chapterSlug}/overview.ts`
	);

	return {
		...overview,
		slug: `${courseSlug}/${chapterSlug}`
	};
};

export const getLessonOverview = async (
	courseSlug: string,
	chapterSlug: string,
	lessonSlug: string
): Promise<LessonOverviewWithSlug> => {
	const { overview } = await import(
		`../../../../../courses/content/${courseSlug}/${chapterSlug}/${lessonSlug}/overview.ts`
	);

	return {
		...overview,
		slug: `${courseSlug}/${chapterSlug}/${lessonSlug}`
	};
};
