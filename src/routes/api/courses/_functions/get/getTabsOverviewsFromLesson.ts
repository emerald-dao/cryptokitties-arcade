import type {
	LessonTabOverview,
	LessonTabOverviewWithSlug
} from '$courses/types/lesson-tab-overview.interface';
import { extractOverviewsFromRecords } from '../utils/extractOverviewsFromRecords';

export const getTabsOverviewsFromLesson = async (
	courseSlug: string,
	chapterSlug: string,
	lessonSlug: string
): Promise<LessonTabOverviewWithSlug[]> => {
	const lessonsTabsOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/*/tabs/*/overview.ts'
	) as Record<string, () => Promise<{ overview: LessonTabOverview }>>;
	const iterableRecords = Object.entries(lessonsTabsOverviewsRecords);

	const thisCourseRecords = iterableRecords.filter(([path]) => path.split('/')[4] === courseSlug);
	const thisChapterRecords = thisCourseRecords.filter(
		([path]) => path.split('/')[5] === chapterSlug
	);
	const thisLessonRecords = thisChapterRecords.filter(
		([path]) => path.split('/')[6] === lessonSlug
	);

	const tabsOverviews = await extractOverviewsFromRecords(thisLessonRecords);

	return tabsOverviews;
};
