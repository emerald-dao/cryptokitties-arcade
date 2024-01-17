<script lang="ts">
	export let data;
</script>

<div class="grid flex-1 grid-cols-[1fr_550px]">
	<article class="p-6">
		<svelte:component this={data.lessonContent} />
	</article>
	<div class="border-l bg-slate-100">
		<div class="flex flex-row items-start">
			{#each data.lessonOverview.tabs as tab}
				<a class="border border-slate-400 bg-slate-300 p-3" href={`/courses/${tab.slug}`}
					>{tab.name}</a
				>
			{/each}
		</div>
		<slot />
	</div>
</div>
