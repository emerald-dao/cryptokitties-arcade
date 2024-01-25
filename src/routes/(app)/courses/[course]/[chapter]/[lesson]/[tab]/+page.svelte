<script lang="ts">
	import TabsContent from './_components/tabs-content/TabsContent.svelte';

	export let data;
</script>

<TabsContent tabContent={data.tabContent} tabOverview={data.tabOverview} />
