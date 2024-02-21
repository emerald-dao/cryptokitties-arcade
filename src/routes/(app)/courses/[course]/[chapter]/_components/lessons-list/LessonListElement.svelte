<script lang="ts">
	import { page } from '$app/stores';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { LessonOverviewWithSlug } from '$courses/types/lesson-overview.interface';
	import { Check } from 'lucide-svelte';

	export let lesson: LessonOverviewWithSlug;
	export let chapter: ChapterOverviewWithLessons;
	export let i: number;
	export let isSidebarOpen: boolean;
	export let completedLesson: boolean;

	$: isLessonActive = $page.params.lesson === lesson.slug.split('/').pop();
	$: chapterNumber = chapter.slug.match(/\/(\d+)-/)?.[1] || '';
</script>

<li class:border={isSidebarOpen} class:border-y={!isSidebarOpen}>
	<a class:flex={isSidebarOpen} class:flex-row={isSidebarOpen} href={`/courses/${lesson.slug}`}>
		<div
			class:bg-primary={isLessonActive}
			class:text-primary-foreground={isLessonActive}
			class:border-r={isSidebarOpen}
			class="flex items-center justify-center px-2 py-1"
		>
			<p>{`${chapterNumber}.${i + 1}`}</p>
		</div>
		{#if isSidebarOpen}
			<div class="flex flex-row items-center justify-center gap-5 px-3 py-1 uppercase">
				<p>
					{lesson.name}
				</p>
				{#if completedLesson}
					<Check class="h-4 w-4 bg-green-600 text-green-200" />
				{/if}
			</div>
		{/if}
	</a>
</li>
