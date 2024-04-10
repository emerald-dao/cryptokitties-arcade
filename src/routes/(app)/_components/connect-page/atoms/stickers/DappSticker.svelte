<script lang="ts">
	import dragMe from '$lib/utils/draggMeAction';
	import type { DappSticker } from '../../DAPPS_STICKERS';
	import sticker from './stickerAction';

	export let dapp: DappSticker;

	let speed = 20;
	let size = 95;
	let font = 0.3;
	let text = dapp.name;
	let repeat = 2;
	let separator = ' • ';

	let lettersArray: string[] = [];
	$: lettersArray = [...Array(repeat)].map((_) => [...text].concat([...separator])).flat();
</script>

<div
	use:sticker={{ left: dapp.position.left, top: dapp.position.top }}
	use:dragMe
	class="absolute flex items-center justify-center rounded-full border-2 bg-white p-1 shadow-sm"
>
	<div class="seal" style="--size: {size}px; --speed: {speed * 1000}ms; --font: {font}em">
		{#each lettersArray as char, index}
			<div class="char" style="--angle: {`${(1 / lettersArray.length) * index}turn`}">{char}</div>
		{/each}
	</div>
	<img draggable="false" src={dapp.logo} class="absolute size-12" role="presentation" />
</div>

<style>
	@keyframes rotation {
		0% {
			transform: rotate(0turn);
		}
		100% {
			transform: rotate(1turn);
		}
	}

	.seal {
		position: relative;
		width: var(--size);
		height: var(--size);
		border-radius: 100%;
		animation: rotation var(--speed) linear infinite;
		font-size: var(--font);
	}

	.char {
		width: 1em;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(var(--angle, 0deg));
		text-align: center;
		text-transform: uppercase;
	}
</style>
