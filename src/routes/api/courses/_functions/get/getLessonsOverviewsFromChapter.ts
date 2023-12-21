import type {
	LessonOverview,
	LessonOverviewWithSlug
} from '$courses/types/lesson-overview.interface';
import { extractOverviewsFromRecords } from '../utils/extractOverviewsFromRecords';

export const getLessonsOverviewsFromChapter = async (
	courseSlug: string,
	chapterSlug: string
): Promise<LessonOverviewWithSlug[]> => {
	const lessonsOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/*/overview.ts'
	) as Record<string, () => Promise<{ overview: LessonOverview }>>;
	const iterableRecords = Object.entries(lessonsOverviewsRecords);

	const thisCourseRecords = iterableRecords.filter(([path]) => path.split('/')[4] === courseSlug);
	const thisChapterRecords = thisCourseRecords.filter(
		([path]) => path.split('/')[5] === chapterSlug
	);

	const chaptersOverviews = await extractOverviewsFromRecords(thisChapterRecords);

	return chaptersOverviews;
};
