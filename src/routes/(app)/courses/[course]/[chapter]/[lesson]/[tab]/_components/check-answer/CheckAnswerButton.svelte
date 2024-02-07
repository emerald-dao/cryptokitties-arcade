<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import CorrectAnswer from './atoms/CorrectAnswer.svelte';

	export let color: keyof typeof COURSES_COLORS;
	export let startingCode: string;
	export let solutionCode: string;
	export let tabOverview: LessonTabOverviewWithSlug;
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;

	let userCode: string;

	let correctAnswer: boolean;

	function handleCheckAnswer() {
		let codeStore = persistentWritable<string>(tabOverview.slug, startingCode);
		codeStore.subscribe((value) => {
			userCode = value;
		});
		const normalizedSolutionCode = normalizeCode(solutionCode);
		const normalizedUserCode = normalizeCode(userCode);

		correctAnswer = normalizedUserCode === normalizedSolutionCode;
	}

	function normalizeCode(code: string) {
		const codeWithoutComments = code.replace(/\/\/.*$/gm, '');
		return codeWithoutComments.replace(/\s/g, '');
	}
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="secondary"
			class="{COURSES_COLORS[color].checkAnswer} rounded-none"
			on:click={handleCheckAnswer}>CHECK ANSWER</Button
		>
	</Popover.Trigger>
	<Popover.Content class="w-26">
		{#if correctAnswer}
			<CorrectAnswer {activeCourse} {activeChapter} />
		{/if}
	</Popover.Content>
</Popover.Root>
