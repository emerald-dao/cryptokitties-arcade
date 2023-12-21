<script lang="ts">
	export let data;
</script>

<div class="flex flex-col p-6">
	<h5 class="text-lg font-medium">{data.tabOverview.name}</h5>
	{#if data.tabOverview.type === 'code'}
		<code class="bg-black p-4 text-sm text-white">
			{data.tabContent.startingCode}
		</code>
	{:else if data.tabOverview.type === 'component'}
		<svelte:component this={data.tabContent} />
	{/if}
</div>
