import { json, error } from '@sveltejs/kit';
import { getCourseOverview } from '../_functions/get/getOverview';
import { getChaptersOverviewsFromCourse } from '../_functions/get/getChaptersOverviewsFromCourse';
import { getLessonsOverviewsFromChapter } from '../_functions/get/getLessonsOverviewsFromChapter';
import type {
	ChapterOverviewWithLessons,
	ChapterOverviewWithSlug
} from '$courses/types/chapter-overview.interface';
import { getAmountOfCourseLessons } from '../_functions/get/getAmountOfCourseLessons';

export const GET = async ({ params }) => {
	try {
		const courseOverview = await getCourseOverview(params.course);
		const chaptersOverviews = await getChaptersOverviewsFromCourse(params.course);
		const courseAmountOfLessons = await getAmountOfCourseLessons(params.course);
		const chaptersWithLessons = (await Promise.all(
			chaptersOverviews.map(async (chapterOverview: ChapterOverviewWithSlug) => {
				let chapterOverviewSlug = chapterOverview.slug.split('/')[1];
				const lessonsOverviews = await getLessonsOverviewsFromChapter(
					courseOverview.slug,
					chapterOverviewSlug
				);

				return {
					...chapterOverview,
					lessons: lessonsOverviews
				};
			})
		)) as ChapterOverviewWithLessons[];

		return json({
			course: { ...courseOverview, chapters: chaptersWithLessons },
			courseAmountOfLessons
		});
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
