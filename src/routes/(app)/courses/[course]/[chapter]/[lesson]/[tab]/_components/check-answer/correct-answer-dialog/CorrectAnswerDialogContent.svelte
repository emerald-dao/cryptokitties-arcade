<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import { page } from '$app/stores';
	import { addLessonFinishedSlug } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext } from 'svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import FinishedAllCoursesDialogContent from './FinishedAllCoursesDialogContent.svelte';
	import FinishedCourseDialogContent from './FinishedCourseDialogContent.svelte';
	import FinishedLessonDialogContent from './FinishedLessonDialogContent.svelte';
	import FinishedLastLessonDialogContent from './FinishedLastLessonDialogContent.svelte';

	export let allCourses: CourseOverviewWithSlug[];
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let totalAmountOfLessons: number;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let activeLessonNumber = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.chapter.split('-')[0]);
	let userFinishedAllCourses: boolean;
	let userFinishedCourse: boolean;
	let finishedLastLesson: boolean;
	let lessonToAdd = activeChapter.lessons[activeLessonNumber - 1].slug;

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
		activeLessonNumber === activeChapter.lessons.length;
</script>

{#if userFinishedAllCourses}
	<audio src="/sounds/success-trumpets.mp3" autoplay></audio>
	<FinishedAllCoursesDialogContent />
{:else if userFinishedCourse}
	<audio src="/sounds/success-trumpets.mp3" autoplay></audio>
	<FinishedCourseDialogContent {activeCourse} {allCourses} />
{:else if finishedLastLesson}
	<audio src="/sounds/success.mp3" autoplay></audio>
	<FinishedLastLessonDialogContent {activeCourse} />
{:else}
	<audio src="/sounds/success.mp3" autoplay></audio>
	<FinishedLessonDialogContent
		{activeChapter}
		{activeCourse}
		{activeChapterNumber}
		{activeLessonNumber}
	/>
{/if}
