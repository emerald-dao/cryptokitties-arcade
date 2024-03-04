<script lang="ts">
	import HeroSection from './_components/home-page/sections/main-section/HeroSection.svelte';
	import CoursesSection from './_components/home-page/sections/courses-section/CoursesSection.svelte';

	export let data;
</script>

<HeroSection />
<CoursesSection
	allCourses={data.courses}
	coursesWithAmountOfLessons={data.coursesWithAmountOfLessons}
/>
