<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';

	export let course: CourseOverviewWithSlug;

	let level = 'LEVEL ' + course.slug.slice(0, 1);
</script>

<div class="grid grid-cols-3 gap-2 border-b-4 border-l-2 border-r-4 border-t-2 border-black">
	<div class="bg-{course.color}-300 max-w-[15ch]">
		<CourseCardLabel>{level}</CourseCardLabel>
		<img src="/Cat.png" alt="course cat" />
	</div>
	<div class="gap-6 px-1 pt-4">
		<h1 class="font-vt323 text-lg uppercase">{course.name}</h1>
		<CourseCardLabel>{course.subject}</CourseCardLabel>
	</div>
</div>
