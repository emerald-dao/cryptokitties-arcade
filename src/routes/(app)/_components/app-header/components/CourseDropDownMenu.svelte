<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';
	import { COURSES_COLORS, type CourseColor } from '$courses/constants/colors';
	import Icon from '@iconify/svelte';

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
	<DropdownMenu.Content sideOffset={0} class="max-w-[550px] border-2 font-pixel">
		<DropdownMenu.Label class="text-lg font-normal">COURSES</DropdownMenu.Label>
		<DropdownMenu.Group class="max-h-96 gap-4 overflow-auto px-4 scrollbar-hide">
			{#each courses as course}
				<DropdownMenu.Item>
					<CourseCard {course} />
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
