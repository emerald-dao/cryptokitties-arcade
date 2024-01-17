<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/CourseCard/CourseCard.svelte';

	export let level: string;
	export let courses: CourseOverviewWithSlug[];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			class="h-full rounded-none border border-black font-pixel text-base {builder['data-state'] ==
			'open'
				? 'bg-[#2A0202] text-white'
				: 'bg-white text-black'}"
			>{level}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content
		class="rounded-none border-b-4 border-l-2 border-r-4 border-t-2 border-black"
	>
		<DropdownMenu.Label class="font-pixel text-lg">COURSES</DropdownMenu.Label>
		<DropdownMenu.Group>
			{#each courses as course}
				<DropdownMenu.Item>
					<CourseCard {course} />
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
