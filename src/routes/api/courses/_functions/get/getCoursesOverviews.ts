import type {
	CourseOverview,
	CourseOverviewWithSlug
} from '$courses/types/course-overview.interface';
import { extractOverviewsFromRecords } from '../utils/extractOverviewsFromRecords';

export const getCoursesOverviews = async (): Promise<CourseOverviewWithSlug[]> => {
	const overviewsRecords = import.meta.glob('/src/courses/content/*/overview.ts') as Record<
		string,
		() => Promise<{ overview: CourseOverview }>
	>;
	const iterableRecords = Object.entries(overviewsRecords);

	const overviews = await extractOverviewsFromRecords(iterableRecords);

	return overviews;
};
