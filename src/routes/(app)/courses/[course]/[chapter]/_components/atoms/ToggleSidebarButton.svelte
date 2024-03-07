<script lang="ts">
	import { resizeEvent } from '$lib/stores/resize-event/resizeEventStore';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	export let isSidebarOpen: boolean = true;

	function handleClick() {
		isSidebarOpen = !isSidebarOpen;
		resizeEvent.set(true);
		setTimeout(() => {
			resizeEvent.set(false);
		}, 500);
	}
</script>

<button
	class:right-0={isSidebarOpen}
	class:-right-6={!isSidebarOpen}
	class="absolute top-1/2 p-0"
	on:click={handleClick}
>
	{#if isSidebarOpen}
		<ChevronLeft />
	{:else}
		<ChevronRight />
	{/if}
</button>
