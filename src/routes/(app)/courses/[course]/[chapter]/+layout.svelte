<script lang="ts">
	import { page } from '$app/stores';
	import LessonsList from './_components/LessonsList.svelte';
	import CompactSidebarButton from './_components/_atoms/CompactSidebarButton.svelte';

	export let data;

	let isSidebarOpen: boolean;
	let lessonNumberInUrl: number | null;

	$: if ($page.params.lesson) {
		handleActiveLesson();
	} else {
		lessonNumberInUrl = null;
	}

	function handleActiveLesson() {
		let lessonParam = $page.params.lesson;
		let match = lessonParam.match(/^(\d+)-/);
		lessonNumberInUrl = match ? parseInt(match[1]) : null;
	}
</script>

<div class={`grid flex-1 ${isSidebarOpen ? `grid-cols-[250px_1fr]` : `grid-cols-[80px_1fr]`}`}>
	<div
		class={`relative flex flex-col gap-3 border-r border-black bg-slate-100 py-6 ${
			isSidebarOpen ? `px-6` : ``
		}`}
	>
		<LessonsList bind:isSidebarOpen bind:lessonNumberInUrl chapter={data.chapter} />
		<CompactSidebarButton bind:isSidebarOpen />
	</div>
	<slot />
</div>
