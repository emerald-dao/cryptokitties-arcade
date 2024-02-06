<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import type { TabContentWithType } from '../../_types/tab-content.type';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import CorrectAnswer from './atoms/CorrectAnswer.svelte';
	import WrongAnswer from './atoms/WrongAnswer.svelte';

	export let color: keyof typeof COURSES_COLORS;
	export let tabContent: TabContentWithType;
	export let tabOverview: LessonTabOverviewWithSlug;
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;

	let userCode: string;
	let codeStore = persistentWritable<string>(tabOverview.slug, '');

	let correctAnswer: boolean;

	function handleCheckAnswer() {
		if (tabContent.type == 'code') {
			codeStore.subscribe((value) => {
				userCode = value;
			});
			const normalizedSolutionCode = normalizeCode(tabContent.content.solutionCode);
			const normalizedUserCode = normalizeCode(userCode);
			console.log(normalizedSolutionCode);
			console.log(normalizedUserCode);
			correctAnswer = normalizedUserCode === normalizedSolutionCode;
		}
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
		{:else}
			<WrongAnswer />
		{/if}
	</Popover.Content>
</Popover.Root>
