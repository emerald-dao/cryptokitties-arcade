<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let course: CourseOverviewWithSlug;
	export let isCourseCompleted = false;

	let level = `LEVEL ${getCourseLevel(course.slug)}`;
</script>

<a href="/courses/{course.slug}">
	<div
		class="grid grid-cols-3 gap-2 border-b-4 border-l-2 border-r-4 border-t-2 border-black bg-white"
	>
		<div class="{COURSES_COLORS[course.color].background} px-[3%] pt-[3%]">
			<CourseCardLabel>{level}</CourseCardLabel>
			<img src="/Cat.png" alt="course cat" />
		</div>
		<div class="col-span-2 flex flex-col items-start gap-[5%] px-[5%] pt-[5%]">
			<h2
				class:text-5xl={isCourseCompleted}
				class:text-xl={!isCourseCompleted}
				class="font-pixel uppercase"
			>
				{course.name}
			</h2>
			<CourseCardLabel {isCourseCompleted}>{course.subject}</CourseCardLabel>
			{#if isCourseCompleted}
				<h3 class="font-pixel text-xl">{course.subject}</h3>
			{/if}
		</div>
	</div>
</a>
