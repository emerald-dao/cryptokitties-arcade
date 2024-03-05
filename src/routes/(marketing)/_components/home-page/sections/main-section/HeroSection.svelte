<script lang="ts">
	import type { COURSES_COLORS } from '$courses/constants/colors';
	import CatCard from './atoms/CatCard.svelte';
	import FlowCatsCallToAction from './atoms/FlowCatsCallToAction.svelte';

	const colors: Array<keyof typeof COURSES_COLORS> = ['pink', 'purple', 'yellow'];
	const images = ['medieval-cat', 'sailor-cat', 'fire-cat'];
</script>

<section class="grid grid-cols-4 grid-rows-2 gap-10 border-b px-36 py-24">
	<div class="row-span-2">
		<CatCard image="vegetation-cat" color="green" />
	</div>
	{#each colors as color, i}
		<CatCard image={images[i]} {color} />
	{/each}
	<div class="col-span-3 col-start-2">
		<FlowCatsCallToAction />
	</div>
</section>
