<script lang="ts">
	export let lessonContent: ConstructorOfATypedSvelteComponent;
</script>

<article class="all-prose p-6 dark:prose-invert">
	<svelte:component this={lessonContent} />
</article>
