import type {
	ChapterOverview,
	ChapterOverviewWithSlug
} from '$courses/types/chapter-overview.interface';
import { extractOverviewsFromRecords } from '../utils/extractOverviewsFromRecords';

export const getChaptersOverviewsFromCourse = async (
	courseSlug: string
): Promise<ChapterOverviewWithSlug[]> => {
	const chaptersOverviewsRecords = import.meta.glob(
		'/src/courses/content/*/*/overview.ts'
	) as Record<string, () => Promise<{ overview: ChapterOverview }>>;
	const iterableRecords = Object.entries(chaptersOverviewsRecords);

	const thisCourseRecords = iterableRecords.filter(([path]) => path.split('/')[4] === courseSlug);

	const chaptersOverviews = await extractOverviewsFromRecords(thisCourseRecords);

	return chaptersOverviews;
};
