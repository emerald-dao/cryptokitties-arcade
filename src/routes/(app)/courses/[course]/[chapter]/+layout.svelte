<script lang="ts">
	import ChapterSidebar from './_components/chapter-sidebar/ChapterSidebar.svelte';

	export let data;
</script>

<div class="grid flex-1 grid-cols-[auto_1fr]">
	<ChapterSidebar chapter={data.chapter} />
	<slot />
</div>
