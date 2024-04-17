<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import { page } from '$app/stores';
	import { addLessonFinishedSlugToStore } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext } from 'svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import FinishedAllCoursesDialogContent from './FinishedAllCoursesDialogContent.svelte';
	import FinishedCourseDialogContent from './FinishedCourseDialogContent.svelte';
	import FinishedLessonDialogContent from './FinishedLessonDialogContent.svelte';
	import FinishedLastLessonDialogContent from './FinishedLastLessonDialogContent.svelte';
	import { checkUserProgress } from '../../../_functions/checkUserProgress';
	import { user } from '$lib/stores/flow/FlowStore';
	import { addUserLessonFinishedToDB } from '$lib/features/users/functions/postUserLessonFinished';
	import type { CurrentUserObject } from '@onflow/fcl';

	export let allCourses: CourseOverviewWithSlug[];
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let totalAmountOfLessons: number;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let activeLessonNumber = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.chapter.split('-')[0]);
	let lessonToAdd = activeChapter.lessons[activeLessonNumber - 1].slug;

	if (!$userFinishedLessons.includes(lessonToAdd)) {
		addLessonFinishedSlugToStore(lessonToAdd);
		if ($user.addr) {
			addUserLessonFinishedToDB($user as CurrentUserObject, lessonToAdd);
		}
	}

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

{#if progress.userFinishedAllCourses}
	<audio src="/sounds/success-trumpets.mp3" autoplay></audio>
	<FinishedAllCoursesDialogContent />
{:else if progress.userFinishedCourse}
	<audio src="/sounds/success-trumpets.mp3" autoplay></audio>
	<FinishedCourseDialogContent {activeCourse} {allCourses} />
{:else if progress.finishedLastLesson}
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
