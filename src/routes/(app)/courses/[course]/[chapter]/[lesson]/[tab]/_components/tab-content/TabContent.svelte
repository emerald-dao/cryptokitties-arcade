<script lang="ts">
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import type { TabContentWithType } from '../../_types/tab-content.type';
	import CodeEditor from '../code-editor/CodeEditor.svelte';

	export let tabOverview: LessonTabOverviewWithSlug;
	export let tabContent: TabContentWithType;
</script>

<div class="flex h-full flex-col overflow-y-auto px-10 py-6">
	<h5 class:text-primary-foreground={tabContent.type === 'code'} class="text-lg font-medium">
		{tabOverview.name}
	</h5>
	{#if tabContent.type === 'code'}
		<CodeEditor {tabOverview} defaultCode={tabContent.content.startingCode} />
	{:else if tabContent.type === 'component'}
		<svelte:component this={tabContent.content} />
	{/if}
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply w-2 border-0;
	}
	::-webkit-scrollbar-thumb {
		@apply border-0;
	}
</style>
