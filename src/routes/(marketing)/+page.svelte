<script lang="ts">
	export let data;
</script>

<h1>Crypto Cats</h1>
<p>Marketing page</p>
{#each data.courses as course}
	<a href={`/courses/${course.slug}`}>
		{course.name}
	</a>
{/each}
