<script lang="ts">
	export let isCompleteCourseCard = false;
</script>

<p
	class:text-2xl={isCompleteCourseCard}
	class:px-6={isCompleteCourseCard}
	class:px-2={!isCompleteCourseCard}
	class="font-pixel w-fit bg-black py-2 uppercase text-white"
>
	<slot />
</p>
