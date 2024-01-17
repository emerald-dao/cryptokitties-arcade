<script lang="ts">
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import CourseDropDownMenu from './components/CourseDropDownMenu/CourseDropDownMenu.svelte';

	export let activeCourse: CourseOverviewWithChapters;
	export let allCourses: CourseOverviewWithSlug[];

	let getLevel = (slug: string): string => {
		return slug.split('-')[0];
	};

	let level = `LEVEL ${getLevel(activeCourse.slug)}`;
</script>

<div class="h-45 flex w-full items-center justify-between border-b border-black px-20">
	<div class="flex items-center gap-6">
		<CourseDropDownMenu {level} courses={allCourses} />
		<h1 class="font-pixel uppercase">{activeCourse.name}</h1>
	</div>
	<FlowCatsLogo />
	<!--TODO: This is de username?-->
	<p class="font-pixel text-sm">jacob.find</p>
</div>
