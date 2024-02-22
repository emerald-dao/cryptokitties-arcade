<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCard from '$lib/components/course-card/CourseCard.svelte';

	export let level: string;
	export let courses: CourseOverviewWithSlug[];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			class="border-y-0 text-xl {builder['data-state'] === 'open'
				? 'bg-foreground text-primary-foreground hover:bg-accent-foreground hover:text-primary-foreground'
				: 'bg-background text-primary hover:bg-inherit'}"
			>{level}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content
		class="max-w-[550px] border-b-4 border-l-2 border-r-4 border-t-2 font-pixel"
	>
		<DropdownMenu.Label class="text-lg">COURSES</DropdownMenu.Label>
		<DropdownMenu.Group class="max-h-96 gap-4 overflow-auto px-4 scrollbar-hide">
			{#each courses as course}
				<DropdownMenu.Item>
					<CourseCard {course} />
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
