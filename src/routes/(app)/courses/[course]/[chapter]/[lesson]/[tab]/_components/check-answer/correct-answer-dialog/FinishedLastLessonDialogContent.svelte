<script lang="ts">
	import Icon from '@iconify/svelte';
	import CorrectAnswerDialogContainer from './atoms/CorrectAnswerDialogContainer.svelte';
	import CorrectAnswerDialogButton from './atoms/CorrectAnswerDialogButton.svelte';
	import CorrectAnswerDialogTitle from './atoms/CorrectAnswerDialogTitle.svelte';
	import CorrectAnswerDialogSubtitle from './atoms/CorrectAnswerDialogSubtitle.svelte';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

	export let activeCourse: CourseOverviewWithChapters;

	let unfinishedLessons: {
		slug: string;
		name: string;
	}[] = [];

	activeCourse.chapters.forEach((chapter) => {
		chapter.lessons.forEach((lesson) => {
			if (!$userFinishedLessons.includes(lesson.slug)) {
				unfinishedLessons.push({
					slug: lesson.slug,
					name: lesson.name
				});
			}
		});
	});
</script>

<CorrectAnswerDialogContainer>
	<CorrectAnswerDialogSubtitle />
	<CorrectAnswerDialogTitle>You've finished the last lesson of the course!</CorrectAnswerDialogTitle
	>
	<div class="flex-1 space-y-4 overflow-y-auto py-4 pr-4">
		<hr class="mb-7 w-full border-2 border-dashed border-black" />
		<span class="font-pixel text-xl leading-7"
			>Anyway, to consider the course done you should complete:</span
		>
		<ul class="flex flex-col items-start">
			{#each unfinishedLessons as lesson}
				<li class="font-pixel text-xl underline">
					<a href="/courses/{lesson.slug}">{lesson.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<CorrectAnswerDialogButton>
		<Icon icon="pixelarticons:home" class="mr-2 h-6 w-6" />
		Home
	</CorrectAnswerDialogButton>
</CorrectAnswerDialogContainer>
