<script lang="ts">
	export let data;
</script>

<h3>Lesson Tabs</h3>
{#each data.lessonOverview.tabs as tab}
	<ul>
		<li>
			<a href={`/courses/${tab.slug}`}>{tab.name}</a>
		</li>
	</ul>
{/each}
<slot />
