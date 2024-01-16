<script lang="ts">
	import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface';

	export let lessonOverview: LessonOverviewWithTabs;
</script>

<div class="flex flex-row items-start">
	{#each lessonOverview.tabs as tab}
		<a class="border border-slate-400 bg-slate-300 p-3" href={`/courses/${tab.slug}`}>{tab.name}</a>
	{/each}
</div>
