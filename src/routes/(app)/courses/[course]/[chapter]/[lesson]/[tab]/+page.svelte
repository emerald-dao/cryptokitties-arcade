<script lang="ts">
	import { getTabOverview } from '../../../../../../api/courses/_functions/get/getOverview';

	export let data;

	console.log(data);
</script>

<h4>{data.tabOverview.name}</h4>
{#if data.tabOverview.type === 'code'}
	{data.tabContent.startingCode}
{:else if data.tabOverview.type === 'component'}
	<svelte:component this={data.tabContent} />
{/if}
