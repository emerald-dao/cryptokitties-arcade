<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import CourseChapterLabel from './atoms/CourseChapterLabel.svelte';
	import ChapterProgressBar from './atoms/ChapterProgressBar.svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext, onDestroy } from 'svelte';

	export let course: CourseOverviewWithChapters;
	export let userCourseFinishedLessons: string[] = [];

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');

	$: unsubscribe = userFinishedLessons.subscribe((value) => {
		userCourseFinishedLessons = value.filter((lesson) => lesson.includes(course.slug));
	});

	$: chapterProgress = Math.round(
		(userCourseFinishedLessons.length / coursesAmountOfLessons[course.slug]) * 100
	);

	function sortChaptersBySlug(a: string, b: string) {
		const chapterNumberA = parseInt(a.split('/').pop()?.split('-')[0] ?? '');
		const chapterNumberB = parseInt(b.split('/').pop()?.split('-')[0] ?? '');

		return chapterNumberA - chapterNumberB;
	}

	course.chapters.sort((a, b) => sortChaptersBySlug(a.slug, b.slug));

	onDestroy(() => unsubscribe);
</script>

<div class="relative border-b-2">
	<div class="flex items-center justify-between gap-x-3.5 px-10">
		<div class="scrollbar-border-top flex w-full divide-x-2 overflow-x-auto border-x-2">
			{#each course.chapters as chapter, i}
				<CourseChapterLabel {chapter} chapterNumber={i + 1} />
			{/each}
		</div>
		<ChapterProgressBar value={chapterProgress} />
	</div>
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply h-2 border-0 border-t-2 border-solid;
	}
	::-webkit-scrollbar-thumb {
		@apply border-0 border-t-2 border-solid;
	}
</style>
