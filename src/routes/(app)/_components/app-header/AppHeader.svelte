<script lang="ts">
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import CourseDropDownMenu from './components/CourseDropDownMenu.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { user } from '$lib/stores/flow/FlowStore';
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';

	export let activeCourse: CourseOverviewWithChapters;
	export let allCourses: CourseOverviewWithSlug[];

	let level = `LEVEL ${getCourseLevel(activeCourse.slug)}`;
</script>

<div class="flex w-full items-center justify-between border-b border-black px-10 font-pixel">
	<div class="flex items-center gap-6">
		<CourseDropDownMenu {level} courses={allCourses} />
		<h1 class=" uppercase">{activeCourse.name}</h1>
	</div>
	<FlowCatsLogo />
	<FlowConnect {logIn} {unauthenticate} user={$user} />
</div>
