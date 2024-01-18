<script lang="ts">
	import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';
	import { page } from '$app/stores';

	export let chapter: ChapterOverviewWithSlug;
	export let chapterNumber: number;

	$: isChapterActive = $page.params.chapter === chapter.slug.split('/').pop();
</script>

<div
	class="{isChapterActive ? 'bg-black text-white' : ''} flex h-8 items-center border-x border-black"
>
	<a href="/courses/{chapter.slug}" class="px-3 font-pixel uppercase">
		{chapterNumber}. {chapter.name}
	</a>
</div>
