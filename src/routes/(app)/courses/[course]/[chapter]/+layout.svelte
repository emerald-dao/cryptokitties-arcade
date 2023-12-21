<script lang="ts">
	export let data;
</script>

<div class="grid flex-1 grid-cols-[250px_1fr]">
	<div class="flex flex-col border-r bg-slate-100 p-6">
		<h3 class="text-md">Lessons</h3>
		{#each data.chapter.lessons as lesson}
			<ul>
				<li>
					<a href={`/courses/${lesson.slug}`}>
						{lesson.name}
					</a>
				</li>
			</ul>
		{/each}
	</div>
	<slot />
</div>
