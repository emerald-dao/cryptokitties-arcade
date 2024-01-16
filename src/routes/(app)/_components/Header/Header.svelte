<script lang="ts">
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import FlowCats from '$lib/components/atoms/FlowCats.svelte';
	import CourseDropDownMenu from './components/CourseDropDownMenu/CourseDropDownMenu.svelte';

	export let course: CourseOverviewWithChapters;
	export let courses: CourseOverviewWithSlug[];

	let level = 'LEVEL ' + course.slug.slice(0, 1);
</script>

<div class="h-45 flex w-full items-center justify-between border-b border-black px-20">
	<div class="flex items-center gap-6">
		<CourseDropDownMenu {level} {courses} />
		<h1 class="font-pixel uppercase">{course.name}</h1>
	</div>
	<div class="justify-start">
		<FlowCats />
	</div>
	<div class="flex items-center gap-4">
		<!--TODO: This is de username?-->
		<p class="font-vt323 text-sm">jacob.find</p>
	</div>
</div>
