<script lang="ts">
	export let isCompleteCourseCard = false;
</script>

<p
	class:text-xl={isCompleteCourseCard}
	class:sm:text-2xl={isCompleteCourseCard}
	class:text-xs={!isCompleteCourseCard}
	class:px-4={isCompleteCourseCard}
	class:sm:px-6={isCompleteCourseCard}
	class:sm:py-2={isCompleteCourseCard}
	class:px-2={!isCompleteCourseCard}
	class:text-base={!isCompleteCourseCard}
	class="w-fit bg-primary py-1 uppercase text-primary-foreground"
>
	<slot />
</p>
