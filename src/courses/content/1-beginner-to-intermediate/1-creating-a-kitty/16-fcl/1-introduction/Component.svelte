<script lang="ts">
	let name: string;

	let imageOptions = [
		'vegetation-cat.png',
		'sailor-cat.png',
		'medieval-cat.png',
		'magician-cat.png'
	];
	let chosenImageIndex = 0;

	$: if (name) {
		chosenImageIndex = Math.floor(Math.random() * 4) % 4;
	}
</script>

<label for="name">Kitty Name</label>
<input type="text" name="name" id="name" bind:value={name} />

{#if name}
	<img src={'/' + imageOptions[chosenImageIndex]} alt="kitty" />
{/if}
