<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import { userCompletedLesson } from '$lib/features/users/functions/checkLessonCompletion';
	import { user } from '$lib/stores/flow/FlowStore';
	import { onMount } from 'svelte';
	import LessonListElement from './LessonListElement.svelte';

	export let chapter: ChapterOverviewWithLessons;
	export let isSidebarOpen: boolean;
</script>

<ul class="flex flex-col gap-2">
	{#each chapter.lessons as lesson, i}
		<LessonListElement bind:isSidebarOpen {lesson} {chapter} {i} />
	{/each}
</ul>
