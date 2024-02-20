<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import CorrectAnswer from './atoms/CorrectAnswer.svelte';
	import WrongAnswer from './atoms/WrongAnswer.svelte';
	import { addUserLessonFinished } from '$lib/features/users/functions/postUserLessonFinished';
	import { user } from '$lib/stores/flow/FlowStore';
	import type { LessonOverviewWithSlug } from '$courses/types/lesson-overview.interface';
	import type { CurrentUserObject } from '@onflow/fcl';

	export let color: keyof typeof COURSES_COLORS;
	export let startingCode: string;
	export let solutionCode: string;
	export let tabOverview: LessonTabOverviewWithSlug;
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let activeLesson: LessonOverviewWithSlug;
	export let courseAmountOfLessons: number;
	export let totalAmountOfLessons: number;

	let userCode: string;
	let correctAnswer: boolean;

	async function handleCheckAnswer() {
		let codeStore = persistentWritable<string>(tabOverview.slug, startingCode);

		const unsubscribe = codeStore.subscribe((value) => {
			userCode = value;
		});

		const normalizedSolutionCode = normalizeCode(solutionCode);
		const normalizedUserCode = normalizeCode(userCode);

		correctAnswer = normalizedUserCode === normalizedSolutionCode;

		if (correctAnswer && $user.addr) {
			addUserLessonFinished($user as CurrentUserObject, activeLesson.slug);
		}

		unsubscribe();
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
	<Popover.Content>
		{#if correctAnswer}
			<CorrectAnswer
				{activeCourse}
				{activeChapter}
				{courseAmountOfLessons}
				{totalAmountOfLessons}
			/>
		{:else}
			<WrongAnswer />
		{/if}
	</Popover.Content>
</Popover.Root>
