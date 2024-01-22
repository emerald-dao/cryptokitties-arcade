<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let course: CourseOverviewWithSlug;

	let level = `LEVEL ${getCourseLevel(course.slug)}`;
	let backgroundColor = COURSES_COLORS[course.color].background;
</script>

<div class="grid grid-cols-3 gap-2 border-b-4 border-l-2 border-r-4 border-t-2 border-black">
	<div class="{backgroundColor}  max-w-[15ch]">
		<CourseCardLabel>{level}</CourseCardLabel>
		<img src="/Cat.png" alt="course cat" />
	</div>
	<div class="gap-6 px-1 pt-4">
		<h2 class="font-pixel text-lg uppercase">{course.name}</h2>
		<CourseCardLabel>{course.subject}</CourseCardLabel>
	</div>
</div>
