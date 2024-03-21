<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { TabContentWithType } from '../../_types/tab-content.type';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import CodeDiffSheet from './code-diff-sheet/CodeDiffSheet.svelte';

	export let color: keyof typeof COURSES_COLORS;
	export let tabContent: TabContentWithType;
	export let tabOverview: LessonTabOverviewWithSlug;
	export let courseImage: string;
</script>

<CodeDiffSheet {color} {tabContent} {tabOverview} {courseImage} />
