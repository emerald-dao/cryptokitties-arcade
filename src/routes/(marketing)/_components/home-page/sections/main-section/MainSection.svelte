<script lang="ts">
	import CatCard from './atoms/CatCard.svelte';
	import FlowCatsCallToAction from './atoms/FlowCatsCallToAction.svelte';

	let colors: ('pink' | 'purple' | 'yellow' | 'green')[] = ['pink', 'purple', 'yellow'];
</script>

<section class="grid grid-cols-4 grid-rows-2 gap-10 border-b border-black px-36 py-24">
	<div class="row-span-2">
		<CatCard image={'rainbow-cat'} color={'green'} />
	</div>
	{#each colors as color}
		<CatCard image={'complete-cat'} {color} />
	{/each}
	<div class="col-span-3 col-start-2">
		<FlowCatsCallToAction />
	</div>
</section>
