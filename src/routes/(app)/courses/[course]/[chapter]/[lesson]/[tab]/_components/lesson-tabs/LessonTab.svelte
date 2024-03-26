<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import { page } from '$app/stores';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';

	export let tab: LessonTabOverviewWithSlug;

	$: isTabActive = $page.params.tab === tab.slug.split('/').pop();
</script>

<a
	class:bg-primary={isTabActive}
	class:text-primary-foreground={isTabActive}
	class="bg-background min-h-12 min-w-fit border-r-2 p-3"
	href={`/courses/${tab.slug}`}
	use:sound>{tab.name}</a
>
