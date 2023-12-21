<script lang="ts">
	export let data;
</script>

<div>
	<h2>Lessons</h2>
	{#each data.chapter.lessons as lesson}
		<a href={`/courses/${lesson.slug}`}>
			{lesson.name}
		</a>
	{/each}
	<slot />
</div>
