<script lang="ts">
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

	export let activeCourse: CourseOverviewWithChapters;

	let unfinishedLessons: string[] = [];

	activeCourse.chapters.forEach((chapter) => {
		chapter.lessons.forEach((lesson) => {
			if (!$userFinishedLessons.includes(lesson.slug)) {
				unfinishedLessons.push(lesson.slug);
			}
		});
	});
</script>

<div class="gap-3">
	<h2 class="text-3xl">Congratulations, you have finished the last lesson of the course!</h2>
	<h4 class="text-xl">Anyway, to consider the course donde you should complete:</h4>
	<div class="flex flex-col">
		{#each unfinishedLessons as lesson}
			<a href="/courses/{lesson}">{lesson}</a>
		{/each}
	</div>
</div>
