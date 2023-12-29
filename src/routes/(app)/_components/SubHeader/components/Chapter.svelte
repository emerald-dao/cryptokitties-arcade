<script lang="ts">
	import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';

	export let chapter: ChapterOverviewWithSlug;
	export let number: number;
</script>

<div class="font-vt323 h-full w-fit border-x border-black px-3 text-base">
	<p>{number}. {chapter.name.toUpperCase()}</p>
</div>
