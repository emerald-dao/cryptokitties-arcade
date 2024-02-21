<script lang="ts">
	import AppSubHeader from '../../_components/app-sub-header/AppSubHeader.svelte';
	import AppHeader from '../../_components/app-header/AppHeader.svelte';

	export let data;
</script>

<AppHeader activeCourse={data.course} allCourses={data.courses} />
<AppSubHeader course={data.course} />
<section class="flex h-screen flex-col">
	<slot />
</section>
