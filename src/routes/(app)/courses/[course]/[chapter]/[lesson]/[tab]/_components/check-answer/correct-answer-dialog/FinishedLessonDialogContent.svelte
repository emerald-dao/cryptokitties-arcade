<script lang="ts">
	import Icon from '@iconify/svelte';
	import CorrectAnswerDialogContainer from './atoms/CorrectAnswerDialogContainer.svelte';
	import CorrectAnswerDialogButton from './atoms/CorrectAnswerDialogButton.svelte';
	import CorrectAnswerDialogTitle from './atoms/CorrectAnswerDialogTitle.svelte';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import { getNextLessonRoute } from '../../../_functions/getNextLessonRoute';

	export let activeChapter: ChapterOverviewWithLessons;
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapterNumber: number;
	export let activeLessonNumber: number;

	let nextLessonRoute = getNextLessonRoute(
		activeChapter,
		activeCourse,
		activeChapterNumber,
		activeLessonNumber
	);
</script>

<CorrectAnswerDialogContainer>
	<CorrectAnswerDialogTitle>Your answer is correct!</CorrectAnswerDialogTitle>
	<CorrectAnswerDialogButton href={nextLessonRoute} pulse={true}>
		Next lesson
		<Icon icon="pixelarticons:arrow-right" class="ml-2 h-6 w-6" />
	</CorrectAnswerDialogButton>
</CorrectAnswerDialogContainer>
