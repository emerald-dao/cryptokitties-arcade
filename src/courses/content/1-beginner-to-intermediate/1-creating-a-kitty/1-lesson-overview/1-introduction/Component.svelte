<script lang="ts">
	import { fly } from 'svelte/transition';
	import { FEATURED_KITTIES } from '../../../../../../routes/(marketing)/_components/home-page/sections/main-section/FEATURED_KITTIES';
	import CatCard from '../../../../../../routes/(marketing)/_components/home-page/sections/main-section/atoms/CatCard.svelte';
	import { quintOut } from 'svelte/easing';

	let name: string;

	let chosenImageIndex = 0;

	$: if (name) {
		chosenImageIndex =
			Math.floor(Math.random() * FEATURED_KITTIES.length) % FEATURED_KITTIES.length;
	}
</script>

<div class="flex max-w-[500px] flex-col">
	<input class="rounded border-2 text-lg" type="text" name="name" id="name" bind:value={name} />

	{#if name}
		<div class="h-[500px] pt-2" transition:fly|local={{ y: 20, duration: 300, easing: quintOut }}>
			<CatCard {name} cat={FEATURED_KITTIES[chosenImageIndex]} />
		</div>
	{/if}
</div>
