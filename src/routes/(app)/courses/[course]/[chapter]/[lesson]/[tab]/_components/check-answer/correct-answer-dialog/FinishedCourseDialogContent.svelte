<script lang="ts">
	import Icon from '@iconify/svelte';
	import CorrectAnswerDialogContainer from './atoms/CorrectAnswerDialogContainer.svelte';
	import CorrectAnswerDialogButton from './atoms/CorrectAnswerDialogButton.svelte';
	import CorrectAnswerDialogTitle from './atoms/CorrectAnswerDialogTitle.svelte';
	import CorrectAnswerDialogSubtitle from './atoms/CorrectAnswerDialogSubtitle.svelte';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';

	export let allCourses: CourseOverviewWithSlug[];
	export let activeCourse: CourseOverviewWithChapters;

	let courseNumber = parseInt(activeCourse.slug.split('-')[0]);
	let isFinalCourse = courseNumber === allCourses.length;
</script>

<CorrectAnswerDialogContainer>
	<CorrectAnswerDialogSubtitle />
	<CorrectAnswerDialogTitle>You have finished {activeCourse.name} course</CorrectAnswerDialogTitle>
	<p class="font-pixel text-center">
		Head to the <a href="https://discord.gg/emerald-city-906264258189332541" class="text-blue-400"
			>Emerald City discord</a
		> and give us feedback on the course to claim your official certificate.
	</p>
	<div class="flex flex-row items-center gap-4">
		<CorrectAnswerDialogButton>
			<Icon icon="pixelarticons:home" class="mr-2 h-6 w-6" />
			Home
		</CorrectAnswerDialogButton>
		{#if !isFinalCourse}
			<CorrectAnswerDialogButton href="/courses/{allCourses[courseNumber].slug}" pulse={true}
				>Next Course
				<Icon icon="pixelarticons:arrow-right" class="ml-2 h-6 w-6" />
			</CorrectAnswerDialogButton>
		{/if}
	</div>
</CorrectAnswerDialogContainer>
