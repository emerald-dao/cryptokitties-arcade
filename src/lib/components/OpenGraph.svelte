<script lang="ts">
	import { page } from '$app/stores';

	export let title = 'CryptoKitties: Arcade!';
	export let description =
		'Learn to code Cadence 1.0 by playing simple games with CrypotKitties!';
	export let courseName = '';

	export let image = `/og?course=${courseName}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${$page.url.origin}${image}`} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="toucans.ecdao.org" />
	<meta property="twitter:url" content={$page.url.href} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${$page.url.origin}${image}`} />
</svelte:head>
