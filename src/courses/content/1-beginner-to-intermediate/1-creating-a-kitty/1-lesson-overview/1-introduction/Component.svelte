<script lang="ts">
	let name: string;
	let dna: number;

	let imageOptions = [
		'vegetation-cat.png',
		'sailor-cat.png',
		'medieval-cat.png',
		'magician-cat.png'
	];

	$: chosenImageIndex = dna % 4;
</script>

<label for="name">Kitty Name</label>
<input type="text" name="name" id="name" bind:value={name} />

<label for="dna">DNA</label>
<input type="number" name="dna" id="dna" bind:value={dna} />

{#if name && dna}
	<h1>{name}</h1>
	<img src={'/' + imageOptions[chosenImageIndex]} alt="kitty" />
{/if}
