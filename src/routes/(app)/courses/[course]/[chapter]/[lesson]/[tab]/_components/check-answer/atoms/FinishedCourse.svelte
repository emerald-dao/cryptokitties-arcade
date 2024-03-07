<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';

	export let allCourses: CourseOverviewWithSlug[];
	export let activeCourse: CourseOverviewWithChapters;

	let courseNumber = parseInt(activeCourse.slug.split('-')[0]);
	let isFinalCourse = courseNumber === allCourses.length;
</script>

<p class="w-full">Congratulations you have finished {activeCourse.name} course</p>

<Button href="/">Home</Button>
{#if !isFinalCourse}
	<Button href="/courses/{allCourses[courseNumber].slug}">Next Course</Button>
{/if}
