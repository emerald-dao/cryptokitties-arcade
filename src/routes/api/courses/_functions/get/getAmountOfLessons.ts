import type {
	LessonOverview,
	LessonOverviewWithSlug
} from '$courses/types/lesson-overview.interface';
import { extractOverviewsFromRecords } from '../utils/extractOverviewsFromRecords';

export const getAmountOfLessons = async (): Promise<number> => {
	const lessonsOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/*/overview.ts'
	) as Record<string, () => Promise<{ overview: LessonOverview }>>;
	const iterableRecords = Object.entries(lessonsOverviewsRecords);
    const amountOfLessons = iterableRecords.length;

	return amountOfLessons;
};
