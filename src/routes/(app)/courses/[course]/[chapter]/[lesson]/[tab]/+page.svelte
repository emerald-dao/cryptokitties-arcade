<script lang="ts">
	import CheckAnswerButton from '../_components/atoms/CheckAnswerButton.svelte';
	import TabContent from './_components/tab-content/TabContent.svelte';
	import CodeDiffSheet from './_components/code-diff-sheet/CodeDiffSheet.svelte';

	export let data;
</script>

<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
{#if data.tabContent.type == 'code'}
	<div class="grid grid-cols-2">
		<CodeDiffSheet
			color={data.course.color}
			tabContent={data.tabContent}
			tabOverview={data.tabOverview}
		/>
		<CheckAnswerButton color={data.course.color} />
	</div>
{/if}
