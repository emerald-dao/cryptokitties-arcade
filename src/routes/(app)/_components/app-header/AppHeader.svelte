<script lang="ts">
	import type {
		CourseOverviewWithChapters,
		CourseOverviewWithSlug
	} from '$courses/types/course-overview.interface';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import CourseDropDownMenu from './components/CourseDropDownMenu.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Wallet } from 'lucide-svelte';

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
	<!--TODO: username-->
	<div class="flex items-center gap-3">
		<h4>Connect to track progress</h4>
		<Button class="gap-1 rounded-none py-0 text-base"
			>Connect
			<Wallet class="h-4 w-4" />
		</Button>
		<!-- <p class="font-pixel text-sm">jacob.find</p> -->
	</div>
</div>
