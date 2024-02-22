<script lang="ts">
	export let isCompleteCourseCard = false;
</script>

<p
	class:text-2xl={isCompleteCourseCard}
	class:text-xs={!isCompleteCourseCard}
	class:px-6={isCompleteCourseCard}
	class:py-2={isCompleteCourseCard}
	class:py-1={!isCompleteCourseCard}
	class:px-2={!isCompleteCourseCard}
	class:text-base={!isCompleteCourseCard}
	class="w-fit bg-primary uppercase text-primary-foreground"
>
	<slot />
</p>
