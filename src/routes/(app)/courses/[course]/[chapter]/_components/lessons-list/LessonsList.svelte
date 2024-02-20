<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import LessonListElement from './LessonListElement.svelte';

	export let chapter: ChapterOverviewWithLessons;
	export let isSidebarOpen: boolean;

	let completedLessons: boolean[] = [];

	$: for (let i = 0; i < chapter.lessons.length; i++) {
		const unsubscribe = userFinishedLessons.subscribe((value) => {
			completedLessons[i] = value.includes(chapter.lessons[i].slug);
		});
		unsubscribe();
	}
</script>

<ul class="flex flex-col gap-2">
	{#each chapter.lessons as lesson, i}
		<LessonListElement
			bind:completedLesson={completedLessons[i]}
			bind:isSidebarOpen
			{lesson}
			{chapter}
			{i}
		/>
	{/each}
</ul>
