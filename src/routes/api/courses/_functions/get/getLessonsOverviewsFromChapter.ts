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
	const thisChapterRecords = thisCourseRecords
		.filter(([path]) => path.split('/')[5] === chapterSlug)
		.sort(([path1], [path2]) => {
			return Number(path1.split('/')[6].split('-')[0]) - Number(path2.split('/')[6].split('-')[0]);
		});

	const chaptersOverviews = await extractOverviewsFromRecords(thisChapterRecords);

	return chaptersOverviews;
};
