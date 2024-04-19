import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';

export const checkUserProgress = (
	userFinishedLessons: string[],
	totalAmountOfLessons: number,
	activeCourse: CourseOverviewWithChapters,
	activeChapter: ChapterOverviewWithLessons,
	activeChapterNumber: number,
	activeLessonNumber: number,
	coursesAmountOfLessons: number
) => {
	let userFinishedAllCourses = userFinishedLessons.length === totalAmountOfLessons;

	let userFinishedCourse =
		userFinishedLessons.filter((l) => l.includes(activeCourse.slug))?.length ===
		coursesAmountOfLessons;

	let finishedLastLesson =
		!userFinishedCourse &&
		activeChapterNumber === activeCourse.chapters.length &&
		activeLessonNumber === activeChapter.lessons.length;

	let oneLessonLeftToFinishCourse =
		userFinishedLessons.filter((l) => l.includes(activeCourse.slug))?.length ===
		coursesAmountOfLessons - 1;

	return {
		userFinishedAllCourses,
		userFinishedCourse,
		finishedLastLesson,
		oneLessonLeftToFinishCourse
	};
};
