<script lang="ts">
	export let lessonContent: ConstructorOfATypedSvelteComponent;
</script>

<article class="p-6">
	<svelte:component this={lessonContent} />
</article>
