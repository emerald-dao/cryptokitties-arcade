<script lang="ts">
	import MarketingHeader from './_components/header/MarketingHeader.svelte';
	import Footer from './_components/footer/Footer.svelte';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
</script>

<OpenGraph />

<MarketingHeader />
<slot />
<Footer />
