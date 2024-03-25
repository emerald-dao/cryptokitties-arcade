<script lang="ts">
	import { isMusicActive } from '$lib/stores/sound/music-store';
	import { isSoundActive } from '$lib/stores/sound/sound-store';
	import { sound } from '$lib/utils/soundAction';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-row items-center gap-2">
	<button
		class="text-lg transition-colors duration-200 ease-in-out"
		aria-label="Toggle sound"
		on:click={() => ($isSoundActive = !$isSoundActive)}
		class:opacity-30={!$isSoundActive}
		use:sound
	>
		<Icon icon="pixelarticons:volume-2" />
	</button>
	<button
		class="text-lg transition-colors duration-200 ease-in-out"
		aria-label="Toggle music"
		on:click={() => ($isMusicActive = !$isMusicActive)}
		class:opacity-30={!$isMusicActive}
		use:sound
	>
		<Icon icon="pixelarticons:music" />
	</button>
</div>
