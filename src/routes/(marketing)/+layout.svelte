<script lang="ts">
	import MarketingHeader from './_components/header/MarketingHeader.svelte';
	import Footer from './_components/footer/Footer.svelte';
	import Seo from '$lib/components/atoms/Seo.svelte';
	import dappInfo from '$lib/config/config';
</script>

<MarketingHeader />
<slot />
<Footer />

<Seo title={dappInfo.title} description={dappInfo.description} type="WebSite" />
