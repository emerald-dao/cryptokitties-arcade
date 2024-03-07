<script lang="ts">
	import { setContext } from 'svelte';
	import '../app.pcss';
	import '../prism.css';
	export let data;

	let innerWidth: number;

	setContext('coursesAmountOfLessons', data.coursesAmountOfLessons);
</script>

<svelte:window bind:innerWidth />
<div class="font-pixel">
	{#if innerWidth < 1100}
		<section class="flex min-h-screen flex-1 flex-col items-center justify-center gap-7">
			<div class="text-2xl uppercase">😺 Flow cats</div>
			<p class="max-w-[35ch] text-center">
				For a better user experience please use a device with a larger screen.
			</p>
		</section>
	{:else}
		<slot />
	{/if}
</div>
