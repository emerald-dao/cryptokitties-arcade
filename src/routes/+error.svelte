<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';

	let errorIs404 = $page.status === 404;
	$: errorImage = errorIs404 ? 'error_404.jpeg' : 'error_500.jpg';
</script>

<div class="flex h-full flex-col items-center justify-center">
	<h1 class="text-5xl uppercase">{errorIs404 ? 'Page not found' : 'An error occurred'}</h1>
	<img src={`${$page.url.origin}/${errorImage}`} alt="error" />
	<p class="text-2xl">
		{errorIs404
			? 'Sorry, the page you requested could not be found.'
			: 'Sorry, something went wrong.'}
	</p>
	<div class="py-10">
		<Button href="/" class="group w-fit px-8 py-8 text-xl">
			<span
				class="flex animate-pulse flex-row items-center gap-x-3 transition duration-300 ease-in-out group-hover:text-green-200"
			>
				<Icon
					icon="pixelarticons:arrow-left"
					class="size-8 inline transition duration-300 ease-in-out"
				/>
				GO HOME
			</span>
		</Button>
	</div>
</div>
