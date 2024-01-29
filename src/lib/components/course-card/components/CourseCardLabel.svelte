<script lang="ts">
	export let isCourseCompleted = false;
</script>

<p
	class:text-2xl={isCourseCompleted}
	class:px-6={isCourseCompleted}
	class:px-2={!isCourseCompleted}
	class="font-pixel w-fit bg-black py-2 uppercase text-white"
>
	<slot />
</p>
