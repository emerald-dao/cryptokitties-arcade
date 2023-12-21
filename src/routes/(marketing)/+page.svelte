<script lang="ts">
	export let data;
</script>

<section class="flex flex-col gap-4 items-center justify-center">
	<h1 class="text-2xl">Crypto Cats</h1>
	<p>Marketing page</p>
	<div class="flex flex-col items-center">
		<h2 class="text-lg">Courses</h2>
		{#each data.courses as course}
			<ul>
				<li>
					<a href={`/courses/${course.slug}`}>
						{course.name}
					</a>
				</li>
			</ul>
		{/each}
	</div>
</section>
