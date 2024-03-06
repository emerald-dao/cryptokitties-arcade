<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { addLessonFinishedSlug } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext } from 'svelte';
	import FinishedAllCourses from './FinishedAllCourses.svelte';
	import FinishedCourse from './FinishedCourse.svelte';
	import FinishedLesson from './FinishedLesson.svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import FinishedLastLesson from './FinishedLastLesson.svelte';

	export let allCourses: CourseOverviewWithSlug[];
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let totalAmountOfLessons: number;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let newRoute = '';
	let activeLesson = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.chapter.split('-')[0]);
	let userFinishedAllCourses: boolean;
	let userFinishedCourse: boolean;
	let finishedLastLesson: boolean;
	let lessonToAdd = activeChapter.lessons[activeLesson - 1].slug;

	if (!$userFinishedLessons.includes(lessonToAdd)) {
		addLessonFinishedSlug(lessonToAdd);
	}
	userFinishedAllCourses = $userFinishedLessons.length === totalAmountOfLessons;

	userFinishedCourse =
		$userFinishedLessons.filter((l) => l.includes(activeCourse.slug))?.length ===
		coursesAmountOfLessons[activeCourse.slug];

	finishedLastLesson =
		!userFinishedCourse &&
		activeChapterNumber === activeCourse.chapters.length &&
		activeLesson === activeChapter.lessons.length;

	async function handleButtonClick() {
		if (activeLesson < activeChapter.lessons.length) {
			newRoute = `/courses/${activeChapter.lessons[activeLesson].slug}`;
		} else if (activeChapterNumber < activeCourse.chapters.length) {
			newRoute = `/courses/${activeCourse.chapters[activeChapterNumber].slug}`;
		} else {
			newRoute = `/courses/${activeChapter.lessons[activeLesson - 1].slug}`;
		}

		goto(newRoute);
	}
</script>

{#if userFinishedAllCourses}
	<FinishedAllCourses />
{:else if userFinishedCourse}
	<FinishedCourse {activeCourse} {allCourses} />
{:else if finishedLastLesson}
	<FinishedLastLesson {activeCourse} />
{:else}
	<FinishedLesson on:clickedButton={handleButtonClick} />
{/if}
