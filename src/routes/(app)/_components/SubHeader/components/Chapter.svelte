<script lang="ts">
	import type { ChapterOverviewWithSlug } from '$courses/types/chapter-overview.interface';
	import { page } from '$app/stores';

	export let chapter: ChapterOverviewWithSlug;
	export let number: number;

	$: path = $page.url.pathname.split('/');
	$: activeCourse = path[2] + '/' + path[3];
	$: isCurrentChapter = chapter.slug === activeCourse;
</script>

<div class="{isCurrentChapter ? 'bg-black text-white' : ''} flex h-8 items-center">
	<a
		href="/courses/{chapter.slug}"
		class="w-fit px-3 font-pixel text-base
     uppercase"
	>
		{number}. {chapter.name}
	</a>
</div>
