<script lang="ts">
	import type { CourseOverviewWithChapters, CourseOverviewWithSlug } from "$courses/types/course-overview.interface";
    import FlowCats from "$lib/atoms/FlowCats.svelte";
    import CourseDropDownMenu from "./components/CourseDropDownMenu/CourseDropDownMenu.svelte";

    export let course: CourseOverviewWithChapters;
    export let courses: CourseOverviewWithSlug[];

    let level = "LEVEL "+course.slug.slice(0,1);
</script>

<div class="w-full h-45 px-20 border-b flex justify-between border-black items-center">
    <div class="flex items-center gap-6">
        <CourseDropDownMenu {level} {courses}/>
        <h1 class="font-vt323">{course.name.toUpperCase()}</h1>
    </div>
    <div class="justify-start">
        <FlowCats/>
    </div>
    <!--Esto deberia ser el nombre del usuario?-->
    <p class="font-vt323 text-sm">jacob.find</p>
</div>