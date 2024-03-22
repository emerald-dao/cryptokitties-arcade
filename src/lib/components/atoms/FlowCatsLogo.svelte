<script lang="ts">
	import { onMount } from 'svelte';

	const catsEmojis = ['😼', '😺', '😸', '😹', '😻', '😽', '🙀', '😿', '😾'];
	let randomCatEmoji = '😼';

	let isHovered = false;

	const randomizeCat = () => {
		randomCatEmoji = catsEmojis[Math.floor(Math.random() * catsEmojis.length)];
	};

	let intervalId: NodeJS.Timeout;

	$: isHovered ? (intervalId = setInterval(randomizeCat, 100)) : clearInterval(intervalId);

	onMount(() => {
		randomizeCat();
	});
</script>

<a
	href="/"
	class="group flex items-center gap-0 text-2xl"
	on:mouseover={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
>
	<p>
		{randomCatEmoji}
		<span class="group-hover:rainbow-text-animated group-hover:text-transparent"> FLOW CATS </span>
	</p>
</a>
