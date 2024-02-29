<script lang="ts">
	import TabContent from './_components/tab-content/TabContent.svelte';
	import HelpButton from './_components/help/HelpButton.svelte';
	import CheckAnswerButton from './_components/check-answer/CheckAnswerButton.svelte';

	export let data;
</script>

<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
{#if data.tabContent.type === 'code'}
	<div class="grid grid-cols-2">
		<HelpButton
			color={data.course.color}
			tabContent={data.tabContent}
			tabOverview={data.tabOverview}
		/>
		<CheckAnswerButton
			color={data.course.color}
			tabOverview={data.tabOverview}
			startingCode={data.tabContent.content.startingCode}
			solutionCode={data.tabContent.content.solutionCode}
			activeCourse={data.course}
			activeChapter={data.chapter}
			activeLesson={data.lessonOverview}
			totalAmountOfLessons={data.amountOfLessons}
		/>
	</div>
{/if}
