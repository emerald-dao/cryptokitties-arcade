<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import { userCompletedCourse } from '$lib/features/users/functions/checkUserCompletedAllCourseLessons';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/flow/FlowStore';
	import { addLessonSlug } from '$lib/stores/user-finished-lessons/userFinishedLessons';
	import { userCompletedAllCourses } from '$lib/features/users/functions/checkUserCompletedAllCourses';

	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let courseAmountOfLessons: number;
	export let totalAmountOfLessons: number;

	let newRoute = '';
	let activeLesson = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.course.split('-')[0]);

	addLessonSlug(activeChapter.lessons[activeLesson - 1].slug);

	async function handleButtonClick() {
		let userFinishedCourse = await userCompletedCourse(
			$user.addr,
			$page.params.course,
			courseAmountOfLessons
		);
		let userFinishedAllCourses = await userCompletedAllCourses($user.addr, totalAmountOfLessons);

		if (userFinishedAllCourses) {
			newRoute = '/completed-all-courses';
		} else if (userFinishedCourse) {
			newRoute = `/completed-course/${activeCourse.slug}`;
		} else if (activeLesson < activeChapter.lessons.length) {
			newRoute = `/courses/${activeChapter.lessons[activeLesson].slug}`;
		} else if (activeChapterNumber < activeCourse.chapters.length) {
			newRoute = `/courses/${activeCourse.chapters[activeChapterNumber].slug}`;
		} else {
			newRoute = '/';
		}

		goto(newRoute);
	}
</script>

<div class="flex flex-row items-center justify-between gap-4 px-4 py-6">
	<div>
		<p class="font-pixel text-lg">Excellent!</p>
		<p class="font-pixel text-lg">Keep going!</p>
	</div>
	<img src="/Cat.png" alt="cat" class="w-18 h-12" />
</div>
<div class="flex items-center justify-center">
	<Button class="rounded-none" on:click={handleButtonClick}>Continue</Button>
</div>
