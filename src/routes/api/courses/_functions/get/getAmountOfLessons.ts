import type { LessonOverview } from '$courses/types/lesson-overview.interface';

export const getAmountOfLessons = async (): Promise<number> => {
	const lessonsOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/*/overview.ts'
	) as Record<string, () => Promise<{ overview: LessonOverview }>>;
	const iterableRecords = Object.entries(lessonsOverviewsRecords);

	const amountOfLessons = iterableRecords.length;

	return amountOfLessons;
};
