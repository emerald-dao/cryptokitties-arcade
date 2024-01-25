<script lang="ts">
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import CodeEditor from '../code-editor/CodeEditor.svelte';

	export let tabOverview: LessonTabOverviewWithSlug;
	export let tabContent:
		| ConstructorOfATypedSvelteComponent
		| { startingCode: string; solutionCode: string };

	let tabContentObject: { startingCode: string; solutionCode: string };
	let tabContentComponent: ConstructorOfATypedSvelteComponent;

	$: if (tabContent && typeof tabContent === 'object') {
		tabContentObject = tabContent;
	} else {
		tabContentComponent = tabContent;
	}
</script>

<div class="flex h-full flex-col p-6">
	<h5 class="text-lg font-medium">{tabOverview.name}</h5>
	{#if tabOverview.type === 'code'}
		<CodeEditor tabContent={tabContentObject} />
	{:else if tabOverview.type === 'component'}
		<svelte:component this={tabContentComponent} />
	{/if}
</div>
