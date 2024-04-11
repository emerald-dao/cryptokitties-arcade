<script lang="ts">
	import type { COURSES_COLORS } from '$courses/constants/colors';
	import CatCard from './atoms/CatCard.svelte';
	import FlowCatsCallToAction from './atoms/FlowCatsCallToAction.svelte';

	const colors: Array<keyof typeof COURSES_COLORS> = ['pink', 'purple', 'yellow'];
	const images = [
		'/images/cats/medieval-cat.png',
		'/images/cats/sailor-cat.png',
		'/images/cats/fire-cat.png'
	];
</script>

<section class="border-b-2 border-solid border-border py-10 md:pb-16 md:pt-10">
	<div class="section grid grid-cols-4 gap-2 sm:gap-4 md:grid-rows-[4fr_5fr] md:gap-7">
		<div class="flex md:row-span-2">
			<CatCard
				image="/images/cats/vegetation-cat.png"
				color="green"
				catName="Vegetation Cat"
				catDescription="This cat loves to play in the garden"
			/>
		</div>
		{#each colors as color, i}
			<CatCard
				image={images[i]}
				{color}
				catName="Crypto Kitties"
				catDescription="This cat loves to play in the garden"
			/>
		{/each}
		<div class="col-span-3 md:col-start-2">
			<FlowCatsCallToAction />
		</div>
	</div>
</section>
