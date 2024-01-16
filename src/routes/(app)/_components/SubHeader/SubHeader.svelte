<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import Chapter from './components/Chapter.svelte';
	import ProgressBar from './components/ProgressBar.svelte';

	export let course: CourseOverviewWithChapters;
</script>

<div class=" flex items-center justify-between gap-x-3.5 border-y border-black px-20">
	<div class="flex flex-wrap place-items-center">
		{#each course.chapters as chapter, i}
			<div class="w-fit border border-black">
				<Chapter {chapter} number={i + 1} />
			</div>
		{/each}
	</div>
	<!--TODO: ask-->
	<ProgressBar value={90} />
</div>
