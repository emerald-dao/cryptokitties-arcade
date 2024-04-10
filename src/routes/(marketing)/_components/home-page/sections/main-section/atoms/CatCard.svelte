<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import { sound } from '$lib/utils/soundAction';

	export let color: keyof typeof COURSES_COLORS;
	export let image: string;
	export let catName: string;
	export let catDescription: string;
</script>

<div
	use:sound={[{ event: 'mouseover', sound: '/sounds/woosh.wav' }]}
	class="group {COURSES_COLORS[color]
		.background} relative flex w-full flex-1 items-center justify-center overflow-hidden rounded border-2"
>
	<div
		class="absolute bottom-[-40px] left-0 hidden w-full bg-black px-4 py-2 text-center uppercase leading-7 text-white transition-transform duration-300 ease-out group-hover:translate-y-[-39px] md:block"
	>
		<span class="text-xl">{catName}</span>
		<p class="line-clamp-2 leading-4">
			{catDescription}
		</p>
	</div>
	<img
		src={image}
		alt="Crypto kitties cat"
		class="z-10 w-full transition-transform duration-300 ease-out group-hover:translate-y-[-25px] group-hover:scale-75"
	/>
</div>
