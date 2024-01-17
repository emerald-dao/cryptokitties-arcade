<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	export let isSidebarOpen: boolean = true;
</script>

<button
	class:right-0={isSidebarOpen}
	class:-right-6={!isSidebarOpen}
	class="absolute top-1/2 p-0"
	on:click={() => (isSidebarOpen = !isSidebarOpen)}
>
	{#if isSidebarOpen}
		<ChevronLeft />
	{:else}
		<ChevronRight />
	{/if}
</button>
