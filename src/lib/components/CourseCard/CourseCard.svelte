<script lang="ts">
	import type { CourseOverviewWithSlug } from "$courses/types/course-overview.interface";
    import BlackBackgroundCourseInfo from "./components/BlackBackgroundCourseInfo.svelte";

    export let course: CourseOverviewWithSlug;

    let level = "LEVEL " + course.slug.slice(0,1);
</script>


<div class="grid grid-cols-3 gap-2 border-r-4 border-l-2 border-t-2 border-b-4 border-black">
    <div class="col-span-1 bg-{course.color}-300 w-[15ch]">
        <BlackBackgroundCourseInfo text={level}/>
        <img src="/Cat.png" alt="course cat"/>
    </div>
    <div class="col-span-2 flex-col gap-6 px-1 pt-4">
        <h1 class="font-vt323 text-lg">{course.name.toUpperCase()}</h1>
        <BlackBackgroundCourseInfo text={course.subject}/>
    </div>
</div>

