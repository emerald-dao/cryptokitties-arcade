<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import CourseChapterLabel from './atoms/CourseChapterLabel.svelte';
	import ProgressBar from './atoms/ProgressBar.svelte';

	export let course: CourseOverviewWithChapters;
</script>

<div class="flex items-center justify-between gap-x-3.5 border-y border-black px-20">
	<div class="flex flex-wrap place-items-center">
		{#each course.chapters as chapter, i}
			<CourseChapterLabel {chapter} chapterNumber={i + 1} />
		{/each}
	</div>
	<!--TODO: progressbar value-->
	<ProgressBar value={90} />
</div>
