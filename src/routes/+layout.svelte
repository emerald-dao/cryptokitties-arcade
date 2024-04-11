<script lang="ts">
	import MusicWidget from './../lib/components/music-widget/MusicWidget.svelte';
	import { onMount, setContext } from 'svelte';
	import '../app.pcss';
	import '../prism.css';
	import { activeLogo } from '$lib/config/logos';
	import { browser } from '$app/environment';
	import { MUSIC_SELECTION, musicStore } from '$lib/stores/sound/music-store';

	export let data;

	setContext('coursesAmountOfLessons', data.coursesAmountOfLessons);

	let music = browser ? new Audio() : null;

	const unsubscibre = musicStore.subscribe((value) => {
		if (browser && music !== null) {
			music.src = MUSIC_SELECTION[value.activeSong].src;

			if (value.isPlaying) {
				music.play();
				music.volume = 0.3;

				music.addEventListener('ended', () => {
					$musicStore.activeSong++;
				});
			} else if (value.isPlaying === false) {
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

<MusicWidget />
