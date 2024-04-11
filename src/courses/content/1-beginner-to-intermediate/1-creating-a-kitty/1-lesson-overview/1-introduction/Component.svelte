<script lang="ts">
	let name: string;

	let imageOptions = [
		'/images/cats/vegetation-cat.png',
		'/images/cats/sailor-cat.png',
		'/images/cats/medieval-cat.png',
		'/images/cats/magician-cat.png',
		'/images/cats/fire-cat.png'
	];
	let chosenImageIndex = 0;

	$: if (name) {
		chosenImageIndex = Math.floor(Math.random() * 5) % 5;
	}
</script>

<label for="name">Kitty Name</label>
<input type="text" name="name" id="name" bind:value={name} />

{#if name}
	<img src={imageOptions[chosenImageIndex]} alt="kitty" />
{/if}
