<script lang="ts">
	import ChapterSidebar from './_components/chapter-sidebar/ChapterSidebar.svelte';

	export let data;
</script>

<div class="grid h-full grid-cols-[auto_1fr]">
	<ChapterSidebar chapter={data.chapter} />
	<div class="overflow-hidden">
		<slot />
	</div>
</div>
