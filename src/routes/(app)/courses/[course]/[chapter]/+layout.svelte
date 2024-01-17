<script lang="ts">
	import LessonSidebar from './_components/chapter-sidebar/ChapterSidebar.svelte';

	export let data;
</script>

<div class="grid flex-1 grid-cols-[auto_1fr]">
	<LessonSidebar chapter={data.chapter} />
	<slot />
</div>
