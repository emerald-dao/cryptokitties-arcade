<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import Chapter from './components/Chapter.svelte';

	export let course: CourseOverviewWithChapters;
</script>

<div class="h-30 w-full items-center border-y border-black px-20">
	{#each course.chapters as chapter, i}
		<Chapter {chapter} number={i + 1} />
	{/each}
</div>
