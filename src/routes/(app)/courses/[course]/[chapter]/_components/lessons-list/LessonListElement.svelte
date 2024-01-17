<script lang="ts">
	import { page } from '$app/stores';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { LessonOverviewWithSlug } from '$courses/types/lesson-overview.interface';

	export let lesson: LessonOverviewWithSlug;
	export let chapter: ChapterOverviewWithLessons;
	export let i: number;
	export let isSidebarOpen: boolean;

	$: isLessonActive = $page.params.lesson === lesson.slug.split('/').pop();

	$: chapterNumber = chapter.slug.match(/\/(\d+)-/)?.[1] || '';
</script>

<li class:border={isSidebarOpen} class:border-y={!isSidebarOpen} class="border-black">
	<a class:flex={isSidebarOpen} class:flex-row={isSidebarOpen} href={`/courses/${lesson.slug}`}>
		<div
			class:bg-black={isLessonActive}
			class:text-white={isLessonActive}
			class:border-r={isSidebarOpen}
			class="flex items-center justify-center border-black px-2 py-1"
		>
			<p>{`${chapterNumber}.${i + 1}`}</p>
		</div>
		{#if isSidebarOpen}
			<div class="px-3 py-1 uppercase">
				<p>{lesson.name}</p>
			</div>
		{/if}
	</a>
</li>
