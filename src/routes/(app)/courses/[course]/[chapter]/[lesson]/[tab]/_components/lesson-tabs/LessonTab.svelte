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
	class="flex min-h-12 min-w-fit items-center gap-1 border-r-2 bg-background px-2 py-3"
	href={`/courses/${tab.slug}`}
	use:sound
>
	{tab.name}
	{#if tab.type === 'code'}
		{#if correctAnswers.indexOf(tab.slug) !== -1}
			<div class="flex h-full items-center justify-center">
				<Icon icon="pixelarticons:check" class="text-lg text-green-700" />
			</div>
		{:else if incorrectAnswers.indexOf(tab.slug) !== -1}
			<div class="flex h-full items-center justify-center">
				<Icon icon="pixelarticons:close" class="text-lg text-red-700" />
			</div>
		{/if}
	{/if}
</a>
