<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import { page } from '$app/stores';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import Icon from '@iconify/svelte';

	export let tab: LessonTabOverviewWithSlug;
	export let incorrectAnswers: string[] = [];
	export let correctAnswers: string[] = [];

	$: isTabActive = $page.params.tab === tab.slug.split('/').pop();
</script>

<a
	class:bg-primary={isTabActive}
	class:text-primary-foreground={isTabActive}
	class="flex min-h-12 items-center gap-2 border-r-2 bg-background px-2 py-3"
	href={`/courses/${tab.slug}`}
	use:sound
>
	{tab.name}
	{#if tab.type === 'code'}
		{#if correctAnswers.indexOf(tab.slug) !== -1}
			<div
				class="flex aspect-square size-5 items-center justify-center rounded-sm border-2 border-solid border-green-600 bg-green-200"
			>
				<Icon icon="pixelarticons:check" class="text-xs text-green-700" />
			</div>
		{:else if incorrectAnswers.indexOf(tab.slug) !== -1}
			<div
				class="flex size-5 items-center justify-center rounded-sm border-2 border-solid border-red-600 bg-red-200"
			>
				<Icon icon="pixelarticons:close" class="text-xs text-red-700" />
			</div>
		{/if}
	{/if}
</a>
