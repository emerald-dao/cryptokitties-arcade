<script lang="ts">
	import { FEATURED_KITTIES } from '../../../../../../routes/(marketing)/_components/home-page/sections/main-section/FEATURED_KITTIES';
	import CatCard from '../../../../../../routes/(marketing)/_components/home-page/sections/main-section/atoms/CatCard.svelte';

	let name: string;

	let chosenImageIndex = 0;

	$: if (name) {
		chosenImageIndex =
			Math.floor(Math.random() * FEATURED_KITTIES.length) % FEATURED_KITTIES.length;
	}
</script>

<input class="rounded border-2 text-lg" type="text" name="name" id="name" bind:value={name} />

<div class="h-[500px] pt-2">
	{#if name}
		<CatCard {name} cat={FEATURED_KITTIES[chosenImageIndex]} />
	{/if}
</div>
