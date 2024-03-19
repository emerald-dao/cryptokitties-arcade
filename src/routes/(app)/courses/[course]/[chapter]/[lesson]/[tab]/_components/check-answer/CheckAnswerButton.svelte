<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import WrongAnswer from './atoms/WrongAnswer.svelte';
	import { addUserLessonFinished } from '$lib/features/users/functions/postUserLessonFinished';
	import { user } from '$lib/stores/flow/FlowStore';
	import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface';
	import type { CurrentUserObject } from '@onflow/fcl';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { CodeTabContent } from '../../_types/tab-content.type';
	import CorrectAnswerDialogContent from './correct-answer-dialog/CorrectAnswerDialogContent.svelte';

	export let allCourses: CourseOverviewWithSlug[];
	export let color: keyof typeof COURSES_COLORS;
	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;
	export let activeLesson: LessonOverviewWithTabs;
	export let totalAmountOfLessons: number;
	export let codeTabsContent: CodeTabContent[];

	let userCode: string;
	let availableToOpen = 'none';

	async function handleCheckAnswer() {
		const codeTabs = activeLesson.tabs.filter((tab) => tab.type === 'code');

		for (let i = 0; i < codeTabs.length && i < codeTabsContent.length; i++) {
			const tab = codeTabs[i];
			const startingCode = codeTabsContent[i].startingCode;

			let codeStore = persistentWritable<string>(tab.slug, startingCode);

			const unsubscribe = codeStore.subscribe((value) => {
				userCode = value;
			});

			const normalizedSolutionCode = normalizeCode(codeTabsContent[i].solutionCode);
			const normalizedUserCode = normalizeCode(userCode);

			if (normalizedUserCode !== normalizedSolutionCode) {
				availableToOpen = 'popOver';
				unsubscribe();
				return;
			}
			unsubscribe();
		}
		availableToOpen = 'dialog';

		if ($user.addr) {
			addUserLessonFinished($user as CurrentUserObject, activeLesson.slug);
		}
	}

	function normalizeCode(code: string) {
		const codeWithoutComments = code.replace(/\/\/.*$/gm, '');
		return codeWithoutComments.replace(/\s/g, '');
	}

	function handleClose() {
		availableToOpen = 'none';
	}
</script>

<Dialog.Root open={availableToOpen === 'dialog'} closeFocus={handleClose}>
	<Dialog.Content class="border-4">
		<CorrectAnswerDialogContent
			{allCourses}
			{activeCourse}
			{activeChapter}
			{totalAmountOfLessons}
		/>
	</Dialog.Content>
</Dialog.Root>

<Popover.Root>
	<Popover.Trigger asChild let:builder
		><Button
			builders={[builder]}
			variant="secondary"
			class={`${COURSES_COLORS[color].checkAnswer}`}
			on:click={handleCheckAnswer}>CHECK ANSWER</Button
		>
	</Popover.Trigger>
	{#if availableToOpen === 'popOver'}
		<Popover.Content>
			<WrongAnswer courseImage={activeCourse.image} />
		</Popover.Content>
	{/if}
</Popover.Root>
