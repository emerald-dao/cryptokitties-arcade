<script lang="ts">
	import AppSubHeader from '../../_components/app-sub-header/AppSubHeader.svelte';
	import AppHeader from '../../_components/app-header/AppHeader.svelte';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { user } from '$lib/stores/flow/FlowStore';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';

	export let data;

	let innerWidth: number;

	async function userCompletedLessons() {
		return await getUserCompletedLessons($user.addr);
	}

	$: if ($user) {
		userCompletedLessons().then((finishedLessons) => {
			userFinishedLessons.set(finishedLessons);
		});
	}
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 1100}
	<section class="flex h-full flex-1 flex-col items-center justify-center gap-7">
		<FlowCatsLogo />
		<p class="max-w-[40ch] text-center text-lg uppercase leading-tight">
			For a better user experience please use a device with a larger screen.
		</p>
	</section>
{:else}
	<div class="flex h-full flex-1 flex-col overflow-hidden">
		<AppHeader activeCourse={data.course} allCourses={data.courses} />
		<AppSubHeader course={data.course} />
		<section class="flex-1 overflow-hidden">
			<slot />
		</section>
	</div>
{/if}
