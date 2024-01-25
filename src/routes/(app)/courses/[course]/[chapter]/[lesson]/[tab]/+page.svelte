<script lang="ts">
	import CodeEditor from './_components/code-editor/CodeEditor.svelte';

	export let data;

	let tabContentObject: { startingCode: string; solutionCode: string };
	let tabContentComponent: ConstructorOfATypedSvelteComponent;

	$: if (data.tabContent && typeof data.tabContent === 'object') {
		tabContentObject = data.tabContent;
	} else {
		tabContentComponent = data.tabContent;
	}
</script>

<div class="flex h-full flex-col p-6">
	<h5 class="text-lg font-medium">{data.tabOverview.name}</h5>
	{#if data.tabOverview.type === 'code'}
		<CodeEditor tabContent={tabContentObject} />
	{:else if data.tabOverview.type === 'component'}
		<svelte:component this={tabContentComponent} />
	{/if}
</div>
