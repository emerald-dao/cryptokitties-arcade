<script lang="ts">
	import ToggleSidebarButton from './_components/atoms/ToggleSidebarButton.svelte';
	import ChapterSidebar from './_components/chapter-sidebar/ChapterSidebar.svelte';

	export let data;

	let isSidebarOpen = true;
</script>

<div class="grid h-full grid-cols-[auto_1fr]">
	<div class="flex items-center overflow-y-hidden">
		<div class="h-full overflow-hidden">
			<ChapterSidebar bind:isSidebarOpen chapter={data.chapter} />
		</div>
		<ToggleSidebarButton bind:isSidebarOpen />
	</div>
	<div class="overflow-hidden">
		<slot />
	</div>
</div>
