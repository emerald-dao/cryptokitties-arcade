<script lang="ts">
	import TabContent from './_components/tab-content/TabContent.svelte';
	import HelpButton from './_components/help/HelpButton.svelte';
	import CheckAnswerButton from './_components/check-answer/CheckAnswerButton.svelte';
	import LessonTabs from './_components/lesson-tabs/LessonTabs.svelte';
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let data;
</script>

<div
	class:bg-primary={data.tabContent.type === 'code'}
	class="flex h-full flex-col {data.tabContent.type === 'component'
		? COURSES_COLORS[data.course.color].background
		: ''} justify-between border-l"
>
	<div class="flex flex-row flex-wrap items-start">
		{#each data.lessonOverview.tabs as tab}
			<LessonTabs {tab} />
		{/each}
	</div>
	<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
	{#if data.tabContent.type === 'code'}
		<div class="grid grid-cols-2">
			<HelpButton
				color={data.course.color}
				tabContent={data.tabContent}
				tabOverview={data.tabOverview}
			/>
			<CheckAnswerButton
				allCourses={data.courses}
				color={data.course.color}
				tabOverview={data.tabOverview}
				startingCode={data.tabContent.content.startingCode}
				solutionCode={data.tabContent.content.solutionCode}
				activeCourse={data.course}
				activeChapter={data.chapter}
				activeLesson={data.lessonOverview}
				totalAmountOfLessons={data.totalAmountOfLessons}
			/>
		</div>
	{/if}
</div>
