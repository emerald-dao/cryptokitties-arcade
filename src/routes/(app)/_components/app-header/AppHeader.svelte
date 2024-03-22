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
	import MissionCompletedLabel from '$lib/components/atoms/MissionCompletedLabel.svelte';

	export let activeCourse: CourseOverviewWithChapters;
	export let allCourses: CourseOverviewWithSlug[];

	$: level = `MISSION ${getCourseLevel(activeCourse.slug)}`;
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

<div class="flex w-full items-center justify-between border-b-2 px-10">
	<div class="flex h-full items-center gap-6">
		<CourseDropDownMenu {level} courses={allCourses} color={activeCourse.color} />
		<h1 class="text-xl uppercase">{activeCourse.name}</h1>
		{#if userFinishedCourse}
			<MissionCompletedLabel isCompleted={userFinishedCourse} />
		{/if}
	</div>
	<FlowCatsLogo />
	<FlowConnect logIn={() => connect()} {unauthenticate} user={$user} />
</div>
