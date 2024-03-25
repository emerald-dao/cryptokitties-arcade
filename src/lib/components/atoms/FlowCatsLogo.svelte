<script lang="ts">
	import { activeLogo, getRandomLogo } from '$lib/config/logos';

	let isHovered = false;

	const randomizeLogoStore = () => {
		$activeLogo = getRandomLogo();
	};

	let intervalId: NodeJS.Timeout;

	$: isHovered ? (intervalId = setInterval(randomizeLogoStore, 100)) : clearInterval(intervalId);
</script>

<a
	href="/"
	class="group flex items-center gap-0 text-2xl"
	on:mouseover={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
>
	<p>
		{$activeLogo}
		<span class="group-hover:rainbow-text-animated group-hover:text-transparent"> FLOW CATS </span>
	</p>
</a>
