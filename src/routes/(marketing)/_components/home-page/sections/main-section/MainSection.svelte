<script lang="ts">
	import CatImageWithBackground from './atoms/CatImageWithBackground.svelte';
	let images = ['complete-cat', 'complete-cat', 'complete-cat'];
	let colors: ('pink' | 'purple' | 'yellow' | 'green')[] = ['pink', 'purple', 'yellow'];
</script>

<section class="grid grid-cols-4 grid-rows-2 gap-4">
	<div class="row-span-2">
		<CatImageWithBackground image={'rainbow-cat'} color={'green'} />
	</div>
	{#each images as image, i}
		<CatImageWithBackground {image} color={colors[i]} />
	{/each}
	<div class="col-span-3 col-start-2">9</div>
</section>
