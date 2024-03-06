<script lang="ts">
	import type { COURSES_COLORS } from '$courses/constants/colors';
	import CatCard from './atoms/CatCard.svelte';
	import FlowCatsCallToAction from './atoms/FlowCatsCallToAction.svelte';

	const colors: Array<keyof typeof COURSES_COLORS> = ['pink', 'purple', 'yellow'];
</script>

<section class="border-b py-24">
	<div class="section grid grid-cols-4 grid-rows-2 gap-10">
		<div class="row-span-2">
			<CatCard image="rainbow-cat" color="green" />
		</div>
		{#each colors as color}
			<CatCard image="complete-cat" {color} />
		{/each}
		<div class="col-span-3 col-start-2">
			<FlowCatsCallToAction />
		</div>
	</div>
</section>
