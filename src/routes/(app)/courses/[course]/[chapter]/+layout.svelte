<script lang="ts">
	import ChapterLayout from './_components/chapter-sidebar/ChapterSidebar.svelte';

	export let data;
</script>

<div class="grid flex-1 grid-cols-[auto_1fr]">
	<ChapterLayout chapter={data.chapter} />
	<slot />
</div>
