<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import CourseChapterLabel from './atoms/CourseChapterLabel.svelte';
	import ChapterProgressBar from './atoms/ChapterProgressBar.svelte';
	import { page } from '$app/stores';

	export let course: CourseOverviewWithChapters;

	$: selectedLessonNumber = parseInt($page.params.lesson?.split('-')[0]) || 0;
	$: chapter = course.chapters.find((c) => c.slug == course.slug + '/' + $page.params.chapter);
	$: amountOfLessons = chapter?.lessons?.length || 0;
	$: chapterProgress = Math.min((selectedLessonNumber * 100) / amountOfLessons, 100) || 0;
</script>

<div class="flex items-center justify-between gap-x-3.5 border-b px-10">
	<div class="flex flex-wrap place-items-center">
		{#each course.chapters as chapter, i}
			<CourseChapterLabel {chapter} chapterNumber={i + 1} />
		{/each}
	</div>
	<ChapterProgressBar value={chapterProgress} />
</div>
