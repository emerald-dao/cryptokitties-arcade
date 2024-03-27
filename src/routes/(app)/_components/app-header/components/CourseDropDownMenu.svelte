<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';
	import { COURSES_COLORS, type CourseColor } from '$courses/constants/colors';
	import Icon from '@iconify/svelte';
	import CourseSmallCard from '$lib/components/course-card/CourseSmallCard.svelte';

	export let level: string;
	export let courses: CourseOverviewWithSlug[];
	export let color: CourseColor;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			class={`h-full border-y-0 text-xl ${COURSES_COLORS[color].background} hover:${COURSES_COLORS[color].background}`}
		>
			<Icon icon="pixelarticons:arrows-vertical" class="pr-2"></Icon>
			{level}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content
		sideOffset={0}
		class="min-w-[500px] max-w-[550px] rounded border-2 p-6 font-pixel"
	>
		<DropdownMenu.Label class="text-2xl font-normal uppercase">Missions</DropdownMenu.Label>
		<DropdownMenu.Group class="max-h-96 space-y-3 overflow-auto">
			{#each courses as course}
				<DropdownMenu.Item>
					<CourseSmallCard {course} />
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
