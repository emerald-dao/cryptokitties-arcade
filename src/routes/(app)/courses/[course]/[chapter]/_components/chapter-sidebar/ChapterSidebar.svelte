<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import LessonList from '../lessons-list/LessonsList.svelte';

	export let chapter: ChapterOverviewWithLessons;
	export let isSidebarOpen: boolean;
</script>

<div
	class:px-10={isSidebarOpen}
	class="h-full min-w-[calc(2px_+_2.5rem)] max-w-[350px] overflow-y-auto border-r-2 py-6 transition-all duration-150 ease-linear"
>
	<LessonList bind:isSidebarOpen {chapter} />
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply w-2 border-0;
	}
	::-webkit-scrollbar-thumb {
		@apply border-0;
	}
</style>
