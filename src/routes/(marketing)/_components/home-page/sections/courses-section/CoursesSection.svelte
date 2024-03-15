<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';

	export let allCourses: CourseOverviewWithSlug[];
</script>

<section class="bg-courses-section py-10 md:py-24">
	<div class="section flex flex-col gap-2 sm:gap-6 md:gap-10">
		{#each allCourses as course}
			<CourseCard {course} isCompleteCourseCard={true} />
		{/each}
	</div>
</section>
