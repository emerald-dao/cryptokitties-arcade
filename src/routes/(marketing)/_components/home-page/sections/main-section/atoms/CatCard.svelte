<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import { sound } from '$lib/utils/soundAction';
	import type { FeaturedKitty } from '../FEATURED_KITTIES';

	export let cat: FeaturedKitty;
</script>

<div
	use:sound={[{ event: 'mouseover', sound: '/sounds/woosh.wav' }]}
	class="group {COURSES_COLORS[cat.color]
		.background} relative flex w-full flex-1 items-center justify-center overflow-hidden rounded border-2"
>
	<div
		class="absolute bottom-[-40px] left-0 hidden w-full border-t-2 bg-primary px-4 py-2 text-center leading-7 text-white transition-transform duration-300 ease-out group-hover:translate-y-[-39px] md:block"
	>
		<span class="text-xl uppercase">{cat.name}</span>
		<p class="line-clamp-2 leading-4">
			{cat.description}
		</p>
	</div>
	<img
		src={cat.image}
		alt="Crypto kitties cat"
		class="z-10 w-full transition-transform duration-300 ease-out group-hover:translate-y-[-25px] group-hover:scale-75"
	/>
</div>
