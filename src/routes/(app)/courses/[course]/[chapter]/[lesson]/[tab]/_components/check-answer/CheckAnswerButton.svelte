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
	import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface';
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
	export let incorrectAnswers: string[] = [];
	export let correctAnswers: string[] = [];

	let userCode: string;
	let popOverOpen = false;
	let dialogOpen = false;

	async function handleCheckAnswer() {
		popOverOpen = false;
		let allTabsCorrect = true;

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
				incorrectAnswers =
					incorrectAnswers.indexOf(tab.slug) === -1
						? [...incorrectAnswers, tab.slug]
						: [...incorrectAnswers];
				if (correctAnswers.indexOf(tab.slug) !== -1) {
					correctAnswers.splice(correctAnswers.indexOf(tab.slug), 1);
					correctAnswers = [...correctAnswers];
				}
				allTabsCorrect = false;
			} else {
				correctAnswers =
					correctAnswers.indexOf(tab.slug) === -1
						? [...correctAnswers, tab.slug]
						: [...correctAnswers];
				if (incorrectAnswers.indexOf(tab.slug) !== -1) {
					incorrectAnswers.splice(incorrectAnswers.indexOf(tab.slug), 1);
					incorrectAnswers = [...incorrectAnswers];
				}
			}
			unsubscribe();
		}

		if (allTabsCorrect) {
			dialogOpen = true;
		} else {
			popOverOpen = true;

			const audio = new Audio('/sounds/failure.wav');
			audio.play();
		}
	}

	function normalizeCode(code: string) {
		const codeWithoutComments = code.replace(/\/\/.*$/gm, '');
		return codeWithoutComments.replace(/\s/g, '');
	}
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="border-2">
		<CorrectAnswerDialogContent
			{allCourses}
			{activeCourse}
			{activeChapter}
			{totalAmountOfLessons}
		/>
	</Dialog.Content>
</Dialog.Root>

<Popover.Root bind:open={popOverOpen}>
	<Popover.Trigger let:builder class="flex" asChild>
		<Button
			builders={[builder]}
			variant="secondary"
			class={`${COURSES_COLORS[color].checkAnswer} flex-1 text-lg text-white`}
			on:click={handleCheckAnswer}
			sounds={[]}
		>
			SUBMIT ANSWER</Button
		>
	</Popover.Trigger>
	<Popover.Content sideOffset={20} alignOffset={-20} class="bg-red-200 shadow-red-900">
		<WrongAnswer />
	</Popover.Content>
</Popover.Root>
