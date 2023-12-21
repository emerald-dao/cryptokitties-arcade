import type { ChapterOverview } from '$courses/types/chapter-overview.interface';
import type { CourseOverview } from '$courses/types/course-overview.interface';
import type { LessonOverview } from '$courses/types/lesson-overview.interface';
import type { LessonTabOverview } from '$courses/types/lesson-tab-overview.interface';
import { transformOverviewRouteToSlug } from './transformOverviewRouteToSlug';

export const extractOverviewsFromRecords = async <
	T extends CourseOverview | ChapterOverview | LessonOverview | LessonTabOverview
>(
	iterableFiles: [string, () => Promise<{ overview: T }>][]
) => {
	const overviews = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { overview } = await (resolver() as Promise<{
				overview: T;
			}>);

			return {
				...overview,
				slug: transformOverviewRouteToSlug(path)
			};
		})
	);

	return overviews;
};
