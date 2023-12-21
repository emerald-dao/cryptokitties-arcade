<script lang="ts">
	import Header from '../../_components/Header.svelte';

	export let data;
</script>

<Header />
<h1>{data.course.name}</h1>
<p>{data.course.excerpt}</p>
{#each data.course.chapters as chapter}
	<a href={`/courses/${chapter.slug}`}>{chapter.name} chapter</a>
{/each}
<slot />
