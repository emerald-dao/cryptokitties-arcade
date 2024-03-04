<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';

	export let allCourses: CourseOverviewWithSlug[];
	export let coursesWithAmountOfLessons: { [slug: string]: number };
</script>

<section class="flex flex-col gap-10 bg-pink-200 px-36 py-24">
	{#each allCourses as course}
		<CourseCard
			{course}
			isCompleteCourseCard={true}
			courseAmountOfLessons={coursesWithAmountOfLessons[course.slug]}
		/>
	{/each}
</section>
