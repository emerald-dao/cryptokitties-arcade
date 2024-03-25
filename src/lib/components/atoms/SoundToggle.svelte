<script lang="ts">
	import { isSoundActive } from '$lib/stores/sound/sound-store';
	import Icon from '@iconify/svelte';
</script>

<button
	class="text-lg"
	aria-label="Toggle sound"
	on:click={() => ($isSoundActive = !$isSoundActive)}
>
	{#if $isSoundActive}
		<Icon icon="pixelarticons:volume-2" />
	{:else}
		<Icon icon="pixelarticons:volume-x" />
	{/if}
</button>
