<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	export let isSidebarOpen: boolean = true;
</script>

<Button
	variant="ghost"
	class={`absolute top-1/2 ${isSidebarOpen ? 'right-0' : '-right-6'} p-0 hover:bg-transparent`}
	on:click={() => (isSidebarOpen = !isSidebarOpen)}
>
	{#if isSidebarOpen}
		<ChevronLeft />
	{:else}
		<ChevronRight />
	{/if}
</Button>
