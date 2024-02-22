<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import * as Card from '$lib/components/ui/card';

	export let course: CourseOverviewWithSlug;
	export let isCompleteCourseCard = false;

	let level = `LEVEL ${getCourseLevel(course.slug)}`;
</script>

<Card.Root class="w-full">
	<a
		class="grid grid-cols-3 gap-2 border-b-4 border-l-2 border-r-4 border-t-2"
		href="/courses/{course.slug}"
	>
		<Card.Header class="{COURSES_COLORS[course.color].background} px-[3%] pb-0 pt-[3%]">
			<CourseCardLabel>{level}</CourseCardLabel>
			<img src="/Cat.png" alt="course cat" />
		</Card.Header>
		<Card.Content class="col-span-2 flex flex-col items-start gap-[5%] px-[5%] pt-[5%]">
			<h2
				class:text-5xl={isCompleteCourseCard}
				class:text-lg={!isCompleteCourseCard}
				class="uppercase"
			>
				{course.name}
			</h2>
			<CourseCardLabel {isCompleteCourseCard}>{course.subject}</CourseCardLabel>
			{#if isCompleteCourseCard}
				<h3 class="text-xl">{course.subject}</h3>
			{/if}
		</Card.Content>
	</a>
</Card.Root>
