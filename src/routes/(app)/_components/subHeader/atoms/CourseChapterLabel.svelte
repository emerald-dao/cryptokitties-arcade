<script lang="ts">
	import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';
	import { page } from '$app/stores';

	export let chapter: ChapterOverviewWithSlug;
	export let chapterNumber: number;

	$: isChapterActive = $page.params.chapter === chapter.slug.split('/').pop();
</script>

<div
	class:bg-black={isChapterActive}
	class:text-white={isChapterActive}
	class="flex items-center border-x border-black py-1"
>
	<a href="/courses/{chapter.slug}" class="font-pixel px-3 uppercase">
		{chapterNumber}. {chapter.name}
	</a>
</div>
