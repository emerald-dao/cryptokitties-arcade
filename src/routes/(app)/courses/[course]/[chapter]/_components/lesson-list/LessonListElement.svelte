<script lang="ts">
	import { page } from '$app/stores';
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { LessonOverviewWithSlug } from '$courses/types/lesson-overview.interface';

	export let lesson: LessonOverviewWithSlug;
	export let chapter: ChapterOverviewWithLessons;
	export let i: number;
	export let isSidebarOpen: boolean;

	$: activeLessonSlug = $page.params.lesson;
</script>

<ul>
	<li class:border={isSidebarOpen} class:border-y={!isSidebarOpen} class="border-black">
		<a class:flex={isSidebarOpen} class:flex-row={isSidebarOpen} href={`/courses/${lesson.slug}`}>
			<div
				class:bg-black={activeLessonSlug === lesson.slug.split('/').pop()}
				class:text-white={activeLessonSlug === lesson.slug.split('/').pop()}
				class:border-r={isSidebarOpen}
				class="flex items-center justify-center border-black px-2 py-1"
			>
				<p>{`${chapter.slug.match(/\/(\d+)-/)?.[1] || ''}.${i + 1}`}</p>
			</div>
			{#if isSidebarOpen}
				<div class="px-3 py-1">
					<p>{`${lesson.name.toUpperCase()}`}</p>
				</div>
			{/if}
		</a>
	</li>
</ul>
