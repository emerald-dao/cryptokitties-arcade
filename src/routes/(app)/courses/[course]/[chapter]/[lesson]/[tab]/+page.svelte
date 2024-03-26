<script lang="ts">
	import TabContent from './_components/tab-content/TabContent.svelte';
	import HelpButton from './_components/help/HelpButton.svelte';
	import CheckAnswerButton from './_components/check-answer/CheckAnswerButton.svelte';
	import LessonTab from './_components/lesson-tabs/LessonTab.svelte';
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let data;
</script>

<div
	class:bg-primary={data.tabContent.type === 'code'}
	class="flex h-full flex-col {data.tabContent.type === 'component'
		? COURSES_COLORS[data.course.color].background
		: ''} justify-between border-l-2"
>
	{#if data.lessonOverview.tabs.length > 1}
		<div
			class="scrollbar-border-top flex w-full overflow-x-auto overflow-y-hidden border-b-2 border-r-2 bg-white"
		>
			{#each data.lessonOverview.tabs as tab}
				<LessonTab {tab} />
			{/each}
		</div>
	{/if}
	<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
	{#if data.tabContent.type === 'code'}
		<div class="grid grid-cols-2">
			<HelpButton
				color={data.course.color}
				tabContent={data.tabContent}
				tabOverview={data.tabOverview}
				courseImage={data.course.image}
			/>
			<CheckAnswerButton
				allCourses={data.courses}
				color={data.course.color}
				activeCourse={data.course}
				activeChapter={data.chapter}
				activeLesson={data.lessonOverview}
				totalAmountOfLessons={data.totalAmountOfLessons}
				codeTabsContent={data.codeTabsContent}
			/>
		</div>
	{/if}
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply h-2 border-0 border-t-2 border-solid;
	}
	::-webkit-scrollbar-thumb {
		@apply border-0 border-t-2 border-solid;
	}
</style>
