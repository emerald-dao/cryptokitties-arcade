<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import LessonList from '../lesson-list/LessonList.svelte';
	import ToggleSidebarButton from '../_atoms/ToggleSidebarButton.svelte';

	export let chapter: ChapterOverviewWithLessons;

	export let isSidebarOpen: boolean;
</script>

<div
	class:px-6={isSidebarOpen}
	class="relative flex flex-col gap-3 border-r border-black bg-slate-100 py-6"
>
	<LessonList bind:isSidebarOpen {chapter} />
	<ToggleSidebarButton bind:isSidebarOpen />
</div>
