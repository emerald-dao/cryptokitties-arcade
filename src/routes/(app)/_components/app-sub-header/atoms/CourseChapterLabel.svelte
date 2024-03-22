<script lang="ts">
	import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';
	import { page } from '$app/stores';

	export let chapter: ChapterOverviewWithSlug;
	export let chapterNumber: number;

	$: isChapterActive = $page.params.chapter === chapter.slug.split('/').pop();
</script>

<div
	class:bg-primary={isChapterActive}
	class:text-primary-foreground={isChapterActive}
	class="flex items-center border-r-2 py-1 text-base"
>
	<a href="/courses/{chapter.slug}" class="px-3 uppercase">
		<span class="opacity-60">
			Chapter {chapterNumber}
		</span>
		{chapter.name}
	</a>
</div>
