<script lang="ts">
	import TabContent from './_components/tab-content/TabContent.svelte';

	export let data;
</script>

<TabContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
