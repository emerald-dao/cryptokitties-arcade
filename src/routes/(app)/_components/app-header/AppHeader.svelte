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
	import type { CurrentUserObject } from '@onflow/fcl';
	import { addUser } from '$lib/features/users/functions/postUser';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext } from 'svelte';
	import { Check } from 'lucide-svelte';

	export let activeCourse: CourseOverviewWithChapters;
	export let allCourses: CourseOverviewWithSlug[];

	let level = `LEVEL ${getCourseLevel(activeCourse.slug)}`;
	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');

	const connect = async () => {
		logIn().then(async () => {
			const userExists = await checkUser($user.addr);

			if (userExists.length > 0) {
				console.log('User exists');
			} else {
				addUser($user as CurrentUserObject);
			}
		});
	};
	$: userFinishedCourse =
		$userFinishedLessons.filter((lesson) => lesson.includes(activeCourse.slug))?.length ===
		coursesAmountOfLessons[activeCourse.slug];
</script>

<div class="flex w-full items-center justify-between border-b px-10">
	<div class="flex items-center gap-6">
		<CourseDropDownMenu {level} courses={allCourses} />
		{#if userFinishedCourse}
			<h1 class="flex items-center gap-2 uppercase">
				{activeCourse.name}
				<Check class="h-4 w-4 bg-green-600 text-green-200" />
			</h1>
		{:else}
			<h1 class="uppercase">{activeCourse.name}</h1>
		{/if}
	</div>
	<FlowCatsLogo />
	<FlowConnect logIn={() => connect()} {unauthenticate} user={$user} />
</div>
