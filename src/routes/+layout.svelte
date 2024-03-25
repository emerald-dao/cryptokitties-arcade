<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import '../app.pcss';
	import '../prism.css';
	import { activeLogo } from '$lib/config/logos';
	import { browser } from '$app/environment';
	import { isMusicActive } from '$lib/stores/sound/music-store';

	export let data;

	setContext('coursesAmountOfLessons', data.coursesAmountOfLessons);

	let music: HTMLAudioElement;
	onMount(() => {
		if (browser) {
			music = new Audio('/music/sharp-edges/sharp-edges.mp3');
		}
	});

	const unsubscibre = isMusicActive.subscribe((value) => {
		if (browser && music) {
			if (value) {
				music.volume = 0.3;
				music.play();
				music.loop = true;
			} else {
				music.pause();
			}
		}

		return () => {
			unsubscibre();
		};
	});
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
