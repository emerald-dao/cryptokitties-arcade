<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import { page } from '$app/stores';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { LessonOverviewWithSlug } from '$courses/types/lesson-overview.interface';
	import Icon from '@iconify/svelte';

	export let lesson: LessonOverviewWithSlug;
	export let chapter: ChapterOverviewWithLessons;
	export let i: number;
	export let isSidebarOpen: boolean;
	export let completedLesson: boolean;

	$: isLessonActive = $page.params.lesson === lesson.slug.split('/').pop();
	$: chapterNumber = chapter.slug.match(/\/(\d+)-/)?.[1] || '';
</script>

<div class:border-2={isSidebarOpen} class:border-y-2={!isSidebarOpen}>
	<a
		class:flex={isSidebarOpen}
		class:flex-row={isSidebarOpen}
		href={`/courses/${lesson.slug}`}
		use:sound
	>
		<div
			class:bg-primary={isLessonActive}
			class:text-primary-foreground={isLessonActive}
			class:border-r-2={isSidebarOpen}
			class="flex items-center justify-center px-2 py-1"
		>
			<p>{`${chapterNumber}.${i + 1}`}</p>
		</div>
		{#if isSidebarOpen}
			<div class="flex w-full flex-row items-center justify-between gap-5 uppercase">
				<p class="py-1 pl-2 pr-3 leading-4">
					{lesson.name}
				</p>
				{#if completedLesson}
					<div class="flex h-full items-center justify-center border-l-2 bg-green-200 px-1">
						<Icon icon="pixelarticons:check" class="text-lg text-green-700" />
					</div>
				{/if}
			</div>
		{/if}
	</a>
</div>
