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
	<div class="font-pixel text-center uppercase">
		<p class="text-xl">Claim your official certificate</p>
		<p>
			go to the
			<a href="https://discord.gg/emerald-city-906264258189332541" class="text-blue-400"
				>Emerald City discord</a
			> and provide feedback on the course. Ping us when you're done!
		</p>
	</div>
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
