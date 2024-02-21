<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import LessonList from '../lessons-list/LessonsList.svelte';
	import ToggleSidebarButton from '../atoms/ToggleSidebarButton.svelte';

	export let chapter: ChapterOverviewWithLessons;

	let isSidebarOpen = true;
</script>

<div class:px-10={isSidebarOpen} class="relative flex min-w-10 flex-col gap-3 border-r py-6">
	<LessonList bind:isSidebarOpen {chapter} />
	<ToggleSidebarButton bind:isSidebarOpen />
</div>
