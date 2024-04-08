<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { getContext } from 'svelte';
	import CorrectAnswerDialogContent from '../check-answer/correct-answer-dialog/CorrectAnswerDialogContent.svelte';
	import { page } from '$app/stores';
	import {
		addLessonFinishedSlug,
		userFinishedLessons
	} from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getNextLessonRoute } from '../../_functions/getNextLessonRoute';
	import { goto } from '$app/navigation';
	import { checkUserProgress } from '../../_functions/checkUserProgress';

	export let allCourses: CourseOverviewWithSlug[];
	export let color: keyof typeof COURSES_COLORS;
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let totalAmountOfLessons: number;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let activeLessonNumber = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.chapter.split('-')[0]);
	let lessonToAdd = activeChapter.lessons[activeLessonNumber - 1].slug;

	const nextLesson = () => {
		if (!$userFinishedLessons.includes(lessonToAdd)) {
			addLessonFinishedSlug(lessonToAdd);
		}
		goto(getNextLessonRoute(activeChapter, activeCourse, activeChapterNumber, activeLessonNumber));
	};

	let progress = checkUserProgress(
		$userFinishedLessons,
		totalAmountOfLessons,
		activeCourse,
		activeChapter,
		activeChapterNumber,
		activeLessonNumber,
		coursesAmountOfLessons[activeCourse.slug]
	);
</script>

{#if progress.userFinishedAllCourses || progress.userFinishedCourse || progress.finishedLastLesson}
	<Dialog.Root>
		<Dialog.Trigger
			><Button
				variant="secondary"
				class={`${COURSES_COLORS[color].checkAnswer} w-full flex-1 text-lg text-white`}>NEXT</Button
			>
		</Dialog.Trigger>
		<Dialog.Content class="border-2">
			<CorrectAnswerDialogContent
				{allCourses}
				{activeCourse}
				{activeChapter}
				{totalAmountOfLessons}
			/>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Button
		on:click={() => nextLesson()}
		variant="secondary"
		class={`${COURSES_COLORS[color].checkAnswer} w-full flex-1 text-lg text-white`}>NEXT</Button
	>
{/if}
