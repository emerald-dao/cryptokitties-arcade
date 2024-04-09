<script lang="ts">
	import { fly } from 'svelte/transition';
	import { MUSIC_SELECTION, musicStore } from '$lib/stores/sound/music-store';
	import Icon from '@iconify/svelte';
	import { cubicOut } from 'svelte/easing';
	import { Slider } from '$lib/components/ui/slider/index.js';

	function dragMe(node: HTMLElement) {
		let moving = false;
		let left = 300;
		let top = 100;

		node.style.position = 'fixed';
		node.style.top = `${top}px`;
		node.style.left = `${left}px`;
		node.style.cursor = 'move';
		node.style.userSelect = 'none';

		node.addEventListener('mousedown', () => {
			moving = true;
		});

		window.addEventListener('mousemove', (e) => {
			if (moving) {
				left += e.movementX;
				top += e.movementY;
				node.style.top = `${top}px`;
				node.style.left = `${left}px`;
			}
		});

		window.addEventListener('mouseup', () => {
			moving = false;
		});
	}
</script>

{#if $musicStore.isPlaying}
	<div
		class="fixed bottom-8 left-8 z-20 flex h-fit w-[200px] flex-col rounded border-2 bg-white font-pixel shadow-sm"
		use:dragMe
		transition:fly={{ x: -50, duration: 500, easing: cubicOut }}
	>
		<span class="w-full bg-black py-1 text-center uppercase text-white">Now playing</span>
		<div class="flex flex-row items-center justify-between p-3">
			<button
				on:click={() => {
					$musicStore.activeSong--;
				}}
				disabled={$musicStore.activeSong === 0}
				class:opacity-50={$musicStore.activeSong === 0}
			>
				<Icon icon="pixelarticons:prev" class="size-4" />
			</button>
			<span class="uppercase">
				{MUSIC_SELECTION[$musicStore.activeSong].name}
			</span>
			<button
				on:click={() => $musicStore.activeSong++}
				disabled={$musicStore.activeSong === MUSIC_SELECTION.length - 1}
				class:opacity-50={$musicStore.activeSong === MUSIC_SELECTION.length - 1}
			>
				<Icon icon="pixelarticons:next" class="size-4" />
			</button>
		</div>
		<div class="p-2">
			<Slider bind:value={$musicStore.volume} max={1} step={0.1} />
		</div>
	</div>
{/if}
