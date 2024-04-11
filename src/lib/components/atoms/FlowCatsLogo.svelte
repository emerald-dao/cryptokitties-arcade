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
	class="group flex items-center gap-0 space-x-[6px] text-xl font-bold"
	on:mouseover={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	use:sound
>
	<div class="relative flex h-full w-[2.5ch] items-center justify-center">
		<span class="absolute mt-1 inline-block">
			{$activeLogo}
		</span>
	</div>
	<p class="flex flex-row gap-[5px]">
		CryptoKitties:<span class="rainbow-text-animated uppercase text-transparent"> Arcade!</span>
	</p>
</a>
