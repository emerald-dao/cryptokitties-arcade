<script lang="ts">
	export let lessonContent: ConstructorOfATypedSvelteComponent;
</script>

<article class="all-prose px-6 pb-6 dark:prose-invert">
	<svelte:component this={lessonContent} />
</article>
