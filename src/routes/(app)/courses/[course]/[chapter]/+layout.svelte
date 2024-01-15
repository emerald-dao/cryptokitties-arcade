<script lang="ts">
	import LessonSidebar from './_components/lesson-sidebar/LessonSidebar.svelte';

	export let data;

	let isSidebarOpen: boolean = true;
</script>

<div
	class:grid-cols-[250px_1fr]={isSidebarOpen}
	class:grid-cols-[80px_1fr]={!isSidebarOpen}
	class="grid flex-1"
>
	<LessonSidebar bind:isSidebarOpen chapter={data.chapter} />
	<slot />
</div>
