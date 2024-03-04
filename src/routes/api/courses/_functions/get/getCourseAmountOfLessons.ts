import type { LessonOverview } from '$courses/types/lesson-overview.interface';
import { extractOverviewsFromRecords } from '../utils/extractOverviewsFromRecords';

export const getCourseAmountOfLessons = async (courseSlug: string): Promise<number> => {
	const lessonsOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/*/overview.ts'
	) as Record<string, () => Promise<{ overview: LessonOverview }>>;
	const iterableRecords = Object.entries(lessonsOverviewsRecords);

	const thisCourseRecords = iterableRecords.filter(([path]) => path.split('/')[4] === courseSlug);

	const courseOverviews = await extractOverviewsFromRecords(thisCourseRecords);

	return courseOverviews.length;
};
