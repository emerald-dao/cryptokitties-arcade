<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';
	import { page } from '$app/stores';

	export let chapter: ChapterOverviewWithSlug;
	export let chapterNumber: number;

	$: isChapterActive = $page.params.chapter === chapter.slug.split('/').pop();
</script>

<div
	class:bg-primary={isChapterActive}
	class:text-primary-foreground={isChapterActive}
	class="mt-[-1px] flex items-center border-b border-r border-t py-1 text-base"
>
	<a href="/courses/{chapter.slug}" class="px-3 uppercase" use:sound>
		<span class="opacity-60">
			Chapter {chapterNumber}
		</span>
		{chapter.name}
	</a>
</div>
