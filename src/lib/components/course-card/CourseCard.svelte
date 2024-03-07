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

<Card.Root>
	<a
		class:min-w-96={!isCompleteCourseCard}
		class="block border-2 border-solid border-border shadow-md"
		href="/courses/{course.slug}"
	>
		<div
			class="grid grid-cols-3 gap-2"
			class:min-h-64={isCompleteCourseCard}
			class:min-h-36={!isCompleteCourseCard}
		>
			<Card.Header class="{COURSES_COLORS[course.color].background} relative px-[5%] pt-[3%]">
				<CourseCardLabel>{level}</CourseCardLabel>
				<div class="absolute inset-x-2 bottom-0 flex min-h-max items-center justify-center">
					<img src="/Cat.png" alt="course cat" />
				</div>
			</Card.Header>
			<Card.Content class="col-span-2 flex flex-col gap-[5%] px-[5%]">
				<h2
					class:pt-3={!isCompleteCourseCard}
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
		</div>
	</a>
</Card.Root>
