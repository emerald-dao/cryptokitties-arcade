import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';

export const getNextLessonRoute = (
	activeChapter: ChapterOverviewWithLessons,
	activeCourse: CourseOverviewWithChapters,
	activeChapterNumber: number,
	activeLessonNumber: number
) => {
	if (activeLessonNumber < activeChapter.lessons.length) {
		return `/courses/${activeChapter.lessons[activeLessonNumber].slug}`;
	} else if (activeChapterNumber < activeCourse.chapters.length) {
		return `/courses/${activeCourse.chapters[activeChapterNumber].slug}`;
	} else {
		return `/courses/${activeChapter.lessons[activeLessonNumber - 1].slug}`;
	}
};
