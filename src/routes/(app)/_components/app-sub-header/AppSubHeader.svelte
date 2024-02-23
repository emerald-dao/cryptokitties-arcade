<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import CourseChapterLabel from './atoms/CourseChapterLabel.svelte';
	import ChapterProgressBar from './atoms/ChapterProgressBar.svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { onDestroy } from 'svelte';

	export let course: CourseOverviewWithChapters;
	export let userCourseFinishedLessons: string[] = [];
	let chapterProgress: number;
	let courseAmountOfLessons = 0;

	for (let i = 0; i < course.chapters.length; i++) {
		courseAmountOfLessons += course.chapters[i].lessons.length;
	}

	const unsubscribe = userFinishedLessons.subscribe((value) => {
		userCourseFinishedLessons = value.filter((lesson) => lesson.includes(course.slug));
	});

	$: chapterProgress = (userCourseFinishedLessons.length / courseAmountOfLessons) * 100;

	onDestroy(() => unsubscribe);
</script>

<div class="flex items-center justify-between gap-x-3.5 border-y px-10">
	<div class="flex flex-wrap place-items-center">
		{#each course.chapters as chapter, i}
			<CourseChapterLabel {chapter} chapterNumber={i + 1} />
		{/each}
	</div>
	<ChapterProgressBar value={chapterProgress} />
</div>
