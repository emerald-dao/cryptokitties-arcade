<script lang="ts">
	import TabContent from './_components/tab-content/TabContent.svelte';
	import HelpButton from './_components/help/HelpButton.svelte';
	import CheckAnswerButton from './_components/check-answer/CheckAnswerButton.svelte';
	import LessonTab from './_components/lesson-tabs/LessonTab.svelte';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import { afterUpdate } from 'svelte';
	import NextButton from './_components/next/NextButton.svelte';
	import { page } from '$app/stores';

	export let data;

	let incorrectAnswers: string[] = [];
	let correctAnswers: string[] = [];
	let uniqueTypes = new Set();

	afterUpdate(() => {
		uniqueTypes = new Set();
		data.lessonOverview.tabs.forEach((item) => uniqueTypes.add(item.type));
	});
</script>

<div
	class:bg-primary={data.tabContent.type === 'code'}
	class="flex h-full flex-col {data.tabContent.type === 'component'
		? COURSES_COLORS[data.course.color].background
		: ''} justify-between overflow-x-hidden border-l-2"
>
	{#if data.lessonOverview.tabs.length > 1}
		<div class="max-h-20">
			<div class="scrollbar-border-top flex overflow-auto overflow-y-hidden border-b-2 bg-white">
				{#each data.lessonOverview.tabs as tab}
					<LessonTab bind:correctAnswers bind:incorrectAnswers {tab} />
				{/each}
			</div>
		</div>
	{/if}
	<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
	<div
		class:grid-cols-2={data.tabContent.type === 'code'}
		class:grid-cols-1={data.tabContent.type === 'component'}
		class="sticky bottom-0 grid"
	>
		{#if data.tabContent.type === 'code'}
			<HelpButton
				color={data.course.color}
				tabContent={data.tabContent}
				tabOverview={data.tabOverview}
			/>
		{/if}
		{#if uniqueTypes.size === 1 && uniqueTypes.has('component')}
			{#key $page.url.href}
				<NextButton
					allCourses={data.courses}
					color={data.course.color}
					activeCourse={data.course}
					activeChapter={data.chapter}
					totalAmountOfLessons={data.totalAmountOfLessons}
				/>
			{/key}
		{:else}
			{#key $page.url.href}
				<CheckAnswerButton
					bind:correctAnswers
					bind:incorrectAnswers
					allCourses={data.courses}
					color={data.course.color}
					activeCourse={data.course}
					activeChapter={data.chapter}
					activeLesson={data.lessonOverview}
					totalAmountOfLessons={data.totalAmountOfLessons}
					codeTabsContent={data.codeTabsContent}
				/>
			{/key}
		{/if}
	</div>
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply h-2 border-0 border-t-2 border-solid;
	}
	::-webkit-scrollbar-thumb {
		@apply border-0 border-t-2 border-solid;
	}
</style>
