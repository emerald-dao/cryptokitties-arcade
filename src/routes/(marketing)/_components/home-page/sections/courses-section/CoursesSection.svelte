<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';

	export let allCourses: CourseOverviewWithSlug[];
</script>

<section class="bg-coursesSection flex flex-col gap-10 px-36 py-24">
	{#each allCourses as course}
		<CourseCard {course} isCompleteCourseCard={true} />
	{/each}
</section>
