<script lang="ts">
	import { COURSES_COLORS, type CourseColor } from '$courses/constants/colors';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';

	export let allCourses: CourseOverviewWithSlug[];

	let hoveredColor: CourseColor;
</script>

<section
	class={`py-10 transition-colors md:py-16 ${
		hoveredColor ? COURSES_COLORS[hoveredColor].askForHelp : ''
	}`}
>
	<div class="section space-y-6 md:space-y-12">
		<h2 class="text-center text-4xl uppercase md:text-9xl">Missions</h2>
		<div class="flex flex-col gap-10">
			{#each allCourses as course}
				<div on:mouseover={() => (hoveredColor = course.color)}>
					<CourseCard {course} />
				</div>
			{/each}
		</div>
	</div>
</section>
