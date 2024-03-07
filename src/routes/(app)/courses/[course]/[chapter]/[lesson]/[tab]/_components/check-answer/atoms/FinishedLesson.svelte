<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';

	export let courseImage: string;

	let dispatch = createEventDispatcher();

	function handleButtonClick() {
		dispatch('clickedButton');
	}
</script>

<div class="flex flex-row items-center justify-between gap-4 px-4 py-6">
	<div class="text-lg">
		<p>Excellent!</p>
		<p>Keep going!</p>
	</div>
	<img src="/{courseImage}.png" alt="cat" class="w-18 h-12" />
</div>
<div class="flex items-center justify-center">
	<Button on:click={handleButtonClick}>Continue</Button>
</div>
