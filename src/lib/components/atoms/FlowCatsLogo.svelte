<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import { navigating } from '$app/stores';
	import { activeLogo, getRandomLogo } from '$lib/config/logos';

	let isHovered = false;

	const randomizeLogoStore = () => {
		$activeLogo = getRandomLogo();
	};

	let intervalId: NodeJS.Timeout;

	$: if ($navigating) clearInterval(intervalId);

	$: isHovered ? (intervalId = setInterval(randomizeLogoStore, 100)) : clearInterval(intervalId);
</script>

<a
	href="/"
	class="group flex items-center gap-0 text-2xl"
	on:mouseover={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	use:sound
>
	<p>
		<span class="mr-[-4px] text-xl">
			{$activeLogo}
		</span>
		<span class="group-hover:rainbow-text-animated group-hover:text-transparent"> FLOW CATS </span>
	</p>
</a>
