<script lang="ts">
	import AppSubHeader from '../../_components/app-sub-header/AppSubHeader.svelte';
	import AppHeader from '../../_components/app-header/AppHeader.svelte';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { user } from '$lib/stores/flow/FlowStore';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { setContext } from 'svelte';

	export let data;

	let courseAmountOfLessons = 0;
	for (let i = 0; i < data.course.chapters.length; i++) {
		courseAmountOfLessons += data.course.chapters[i].lessons.length;
	}
	setContext('courseAmountOfLessons', courseAmountOfLessons);

	async function userCompletedLessons() {
		return await getUserCompletedLessons($user.addr);
	}

	$: if ($user) {
		userCompletedLessons().then((finishedLessons) => {
			userFinishedLessons.set(finishedLessons);
		});
	}
</script>

<AppHeader activeCourse={data.course} allCourses={data.courses} />
<AppSubHeader course={data.course} />
<section class="flex h-screen flex-col">
	<slot />
</section>
