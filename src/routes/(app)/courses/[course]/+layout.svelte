<script lang="ts">
	import AppSubHeader from '../../_components/app-sub-header/AppSubHeader.svelte';
	import AppHeader from '../../_components/app-header/AppHeader.svelte';
	import { onMount } from 'svelte';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { user } from '$lib/stores/flow/FlowStore';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

	export let data;

	onMount(async () => {
		let finishedLessons = await getUserCompletedLessons($user.addr);
		userFinishedLessons.set(finishedLessons);
	});
</script>

<AppHeader activeCourse={data.course} allCourses={data.courses} />
<AppSubHeader course={data.course} />
<section class="flex h-screen flex-col bg-slate-50">
	<slot />
</section>
