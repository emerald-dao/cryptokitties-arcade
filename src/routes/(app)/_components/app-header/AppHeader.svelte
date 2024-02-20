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
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

	export let activeCourse: CourseOverviewWithChapters;
	export let allCourses: CourseOverviewWithSlug[];

	let level = `LEVEL ${getCourseLevel(activeCourse.slug)}`;

	const connect = async () => {
		logIn().then(async () => {
			const userExists = await checkUser($user.addr);

			if (userExists.length > 0) {
				console.log('User exists');
			} else {
				addUser($user as CurrentUserObject);
			}

			let finishedLessons = await getUserCompletedLessons($user.addr);
			userFinishedLessons.set(finishedLessons);
		});
	};
</script>

<div class="flex w-full items-center justify-between border-b border-black px-10 font-pixel">
	<div class="flex items-center gap-6">
		<CourseDropDownMenu {level} courses={allCourses} />
		<h1 class="uppercase">{activeCourse.name}</h1>
	</div>
	<FlowCatsLogo />
	<FlowConnect logIn={() => connect()} {unauthenticate} user={$user} />
</div>
