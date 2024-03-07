<script lang="ts">
	import HeroSection from './_components/home-page/sections/main-section/HeroSection.svelte';
	import CoursesSection from './_components/home-page/sections/courses-section/CoursesSection.svelte';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { user } from '$lib/stores/flow/FlowStore';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

	export let data;

	async function userCompletedLessons() {
		return await getUserCompletedLessons($user.addr);
	}

	$: if ($user) {
		userCompletedLessons().then((finishedLessons) => {
			userFinishedLessons.set(finishedLessons);
		});
	}
</script>

<HeroSection />
<CoursesSection allCourses={data.courses} />
