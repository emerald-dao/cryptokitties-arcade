<script lang="ts">
	import { FEATURED_KITTIES } from './FEATURED_KITTIES';
	import CatCard from './atoms/CatCard.svelte';
	import FlowCatsCallToAction from './atoms/FlowCatsCallToAction.svelte';
</script>

<section class="border-b-2 border-solid border-border py-10 md:pb-16 md:pt-10">
	<div class="section grid grid-cols-4 gap-2 sm:gap-4 md:grid-rows-[4fr_5fr] md:gap-7">
		<div class="flex md:row-span-2">
			<CatCard cat={FEATURED_KITTIES[0]} />
		</div>
		{#each FEATURED_KITTIES as kitty, i}
			{#if i > 0}
				<CatCard cat={kitty} />
			{/if}
		{/each}
		<div class="col-span-3 md:col-start-2">
			<FlowCatsCallToAction />
		</div>
	</div>
</section>
