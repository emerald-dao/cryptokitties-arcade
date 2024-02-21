<script lang="ts">
	import type { LessonOverviewWithTabs } from '$courses/types/lesson-overview.interface';

	export let lessonOverview: LessonOverviewWithTabs;
</script>

<div class="flex flex-row items-start">
	{#each lessonOverview.tabs as tab}
		<a class="border bg-background p-3" href={`/courses/${tab.slug}`}>{tab.name}</a>
	{/each}
</div>
