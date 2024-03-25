<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';

	export let allCourses: CourseOverviewWithSlug[];
</script>

<section class="bg-courses-section py-10 md:py-24">
	<div class="section space-y-6 md:space-y-12">
		<h2 class="text-4xl uppercase md:text-7xl">Missions</h2>
		<div class="flex flex-col gap-10">
			{#each allCourses as course}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>
