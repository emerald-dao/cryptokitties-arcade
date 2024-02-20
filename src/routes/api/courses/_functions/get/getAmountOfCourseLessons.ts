import type { LessonOverview } from '$courses/types/lesson-overview.interface';

export const getAmountOfCourseLessons = async (courseSlug: string): Promise<number> => {
	const lessonsOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/*/overview.ts'
	) as Record<string, () => Promise<{ overview: LessonOverview }>>;
	const iterableRecords = Object.entries(lessonsOverviewsRecords);

	const thisCourseRecords = iterableRecords.filter(([path]) => path.split('/')[4] === courseSlug);

	const amountOfCourseLessons = thisCourseRecords.length;

	return amountOfCourseLessons;
};
