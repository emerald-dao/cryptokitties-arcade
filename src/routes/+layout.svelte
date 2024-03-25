<script lang="ts">
	import { setContext } from 'svelte';
	import '../app.pcss';
	import '../prism.css';
	import { activeLogo } from '$lib/config/logos';

	export let data;

	setContext('coursesAmountOfLessons', data.coursesAmountOfLessons);
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{$activeLogo}</text></svg>"
	/>
</svelte:head>

<div class="flex h-svh overflow-hidden border bg-black font-pixel">
	<div class="m-[1%] flex flex-1 overflow-hidden rounded-xl bg-white">
		<div class="flex-1 overflow-hidden overflow-y-auto">
			<slot />
		</div>
	</div>
</div>
