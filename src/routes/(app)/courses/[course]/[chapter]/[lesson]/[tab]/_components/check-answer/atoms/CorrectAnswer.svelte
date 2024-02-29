<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/flow/FlowStore';
	import { addLessonFinishedSlug } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { userCompletedAllCourseLessons } from '$lib/features/users/functions/checkUserCompletedAllCourseLessons';
	import { userCompletedAllCourses } from '$lib/features/users/functions/checkUserCompletedAllCourses';
	import { getContext } from 'svelte';

	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let totalAmountOfLessons: number;

	let courseAmountOfLessons: number = getContext('courseAmountOfLessons');
	let newRoute = '';
	let activeLesson = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.course.split('-')[0]);

	addLessonFinishedSlug(activeChapter.lessons[activeLesson - 1].slug);

	async function handleButtonClick() {
		let userFinishedAllCourses = await userCompletedAllCourses($user.addr, totalAmountOfLessons);
		let userFinishedCourse = await userCompletedAllCourseLessons(
			$user.addr,
			$page.params.course,
			courseAmountOfLessons
		);

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
	<div class="text-lg">
		<p>Excellent!</p>
		<p>Keep going!</p>
	</div>
	<img src="/Cat.png" alt="cat" class="w-18 h-12" />
</div>
<div class="flex items-center justify-center">
	<Button on:click={handleButtonClick}>Continue</Button>
</div>
