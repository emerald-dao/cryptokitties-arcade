<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { onDestroy } from 'svelte';
	import LessonListElement from './LessonListElement.svelte';

	export let chapter: ChapterOverviewWithLessons;
	export let isSidebarOpen: boolean;

	let completedLessons: boolean[] = [];
	let finishedLessons: string[] = [];

	const unsubscribe = userFinishedLessons.subscribe((value) => {
		finishedLessons = value;
	});

	$: for (let i = 0; i < chapter.lessons.length; i++) {
		completedLessons[i] = finishedLessons.includes(chapter.lessons[i].slug);
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="flex flex-col gap-2">
	{#each chapter.lessons as lesson, i}
		<LessonListElement
			bind:completedLesson={completedLessons[i]}
			bind:isSidebarOpen
			{lesson}
			{chapter}
			{i}
		/>
	{/each}
</div>
