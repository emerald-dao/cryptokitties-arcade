<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import LessonListElement from './LessonListElement.svelte';

	export let chapter: ChapterOverviewWithLessons;
	export let isSidebarOpen: boolean;
</script>

{#each chapter.lessons as lesson, i}
	<ul>
		<LessonListElement bind:isSidebarOpen {lesson} {chapter} {i} />
	</ul>
{/each}
