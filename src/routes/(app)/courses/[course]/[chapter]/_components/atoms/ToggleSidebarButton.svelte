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

<button class="flex justify-center bg-black px-0 py-1" on:click={handleClick}>
	{#if isSidebarOpen}
		<ChevronLeft class="h-5 w-5 text-background" />
	{:else}
		<ChevronRight class="h-5 w-5 text-background" />
	{/if}
</button>
