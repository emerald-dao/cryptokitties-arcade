<script lang="ts">
	export let isCompleteCourseCard = false;
</script>

<p
	class:text-2xl={isCompleteCourseCard}
	class:text-xs={!isCompleteCourseCard}
	class:px-6={isCompleteCourseCard}
	class:px-2={!isCompleteCourseCard}
	class="w-fit bg-primary py-2 uppercase text-primary-foreground"
>
	<slot />
</p>
