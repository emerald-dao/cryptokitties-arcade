<script lang="ts">
	import MainSection from './_components/home-page/sections/main-section/MainSection.svelte';
	import CourseSection from './_components/home-page/sections/courses-section/CourseSection.svelte';

	export let data;
</script>

<MainSection />
<CourseSection allCourses={data.courses} />
