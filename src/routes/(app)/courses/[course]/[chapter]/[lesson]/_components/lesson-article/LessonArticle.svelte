<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let lessonContent: ConstructorOfATypedSvelteComponent;

	afterUpdate(() => {
		document.querySelector('.article-wrapper')?.scrollTo({ top: 0 });
	});
</script>

<article class="all-prose px-6 pb-6 dark:prose-invert">
	<svelte:component this={lessonContent} />
</article>
