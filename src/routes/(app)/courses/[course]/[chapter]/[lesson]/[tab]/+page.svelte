<script lang="ts">
	import TabContent from './_components/tab-content/TabContent.svelte';
	import CheckAnswerButton from './_components/check-answer/CheckAnswerButton.svelte';

	export let data;
</script>

<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
{#if data.tabContent.type == 'code'}
	<div class="grid grid-cols-2">
		<CheckAnswerButton
			color={data.course.color}
			tabOverview={data.tabOverview}
			tabContent={data.tabContent}
			activeCourse={data.course}
			activeChapter={data.chapter}
		/>
	</div>
{/if}
