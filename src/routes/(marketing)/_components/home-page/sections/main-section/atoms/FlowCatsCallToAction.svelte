<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
</script>

<div class="mt-4 flex flex-col gap-3 sm:mt-0 sm:gap-3">
	<h1 class="text-4xl uppercase leading-9 tracking-tight sm:text-7xl">Crypto kitties need help!</h1>
	<p class="mb-2 text-lg uppercase leading-7 md:text-xl">
		Learn everything you need to know about the Flow blockchain while saving Crypto Kitties from
		evil hackers.
	</p>
	<Button
		href="/courses/1-beginner-to-intermediate"
		class="group w-fit px-8 py-2 text-xl transition sm:px-16 sm:py-8 sm:text-2xl"
		sounds={[
			{
				sound: '/sounds/start-game.wav',
				event: 'click'
			}
		]}
	>
		<span
			class="flex animate-pulse flex-row items-center transition duration-300 ease-in-out group-hover:text-green-200"
		>
			PLAY NOW
			<Icon
				icon="pixelarticons:play"
				class="ml-3 inline size-8 transition duration-300 ease-in-out"
			/>
		</span>
	</Button>
</div>
