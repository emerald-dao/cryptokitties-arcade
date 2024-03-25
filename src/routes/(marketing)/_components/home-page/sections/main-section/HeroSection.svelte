<script lang="ts">
	import type { COURSES_COLORS } from '$courses/constants/colors';
	import CatCard from './atoms/CatCard.svelte';
	import FlowCatsCallToAction from './atoms/FlowCatsCallToAction.svelte';

	const colors: Array<keyof typeof COURSES_COLORS> = ['pink', 'purple', 'yellow'];
	const images = ['medieval-cat', 'sailor-cat', 'fire-cat'];
</script>

<section class="border-b-2 border-solid border-border py-10 md:py-16">
	<div class="section grid grid-cols-4 gap-2 sm:gap-4 md:grid-rows-2 md:gap-6">
		<div class="flex md:row-span-2">
			<CatCard image="vegetation-cat" color="green" />
		</div>
		{#each colors as color, i}
			<CatCard image={images[i]} {color} />
		{/each}
		<div class="col-span-4 mt-4 sm:mt-6 md:col-start-2">
			<FlowCatsCallToAction />
		</div>
	</div>
</section>
