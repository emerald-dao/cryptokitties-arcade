<script lang="ts">
	import AppSubHeader from '../../_components/app-sub-header/AppSubHeader.svelte';
	import AppHeader from '../../_components/app-header/AppHeader.svelte';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { user } from '$lib/stores/flow/FlowStore';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import ConnectPage from '../../_components/connect-page/ConnectPage.svelte';
	import DesktopOnlyPage from '../../_components/desktop-page/DesktopOnlyPage.svelte';
	import OpenGraph from '$lib/components/OpenGraph.svelte';

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

<OpenGraph
	title={`CryptoKitties: Arcade! • ${data.course.name}`}
	description={data.course.excerpt}
	courseName={data.course.name}
/>

{#if innerWidth < 1100}
	<DesktopOnlyPage />
{:else if !$user.addr}
	<ConnectPage />
{:else}
	<div class="flex h-full flex-1 flex-col overflow-hidden">
		<AppHeader activeCourse={data.course} allCourses={data.courses} />
		<AppSubHeader course={data.course} />
		<section class="flex-1 overflow-hidden">
			<slot />
		</section>
	</div>
{/if}
