<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import type { CourseOverviewWithSlug } from "$courses/types/course-overview.interface";
    import CourseCard from "$lib/components/CourseCard/CourseCard.svelte";

    export let level: string;
    export let courses: CourseOverviewWithSlug[];
</script>
  
<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline" 
      class="h-full rounded-none border-x border-black border-y-0 font-vt323 text-base">{level}
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Label class="font-vt323 text-lg">COURSES</DropdownMenu.Label>
    <DropdownMenu.Group>
      {#each courses as course}
        <DropdownMenu.Item>
          <CourseCard {course}/>
        </DropdownMenu.Item>
      {/each}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>