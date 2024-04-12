<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { sound } from '$lib/utils/soundAction';
</script>

<section class="border-t-2 border-solid py-16">
	<div class="section flex flex-col items-center space-y-8">
		<div>
			<h2 class="mb-2 text-center text-3xl uppercase md:text-6xl">Try zombies too</h2>
			<p class="max-w-[90ch] text-center text-lg">
				Following the Crescendo update, the Flow Blockchain will be 100%
				<a href="https://flow.com/upgrade/crescendo/evm" target="_blank" class="underline"
					>EVM compatible</a
				>.
			</p>
			<p class="max-w-[90ch] text-center text-lg">
				<a href="https://cryptozombies.io/" target="_blank" class="underline">Crypto Zombies</a>,
				the platform that inspired us to create this game, is an awesome place to start learning
				Solidity.
			</p>
		</div>
		<a
			href="https://cryptozombies.io/en/solidity"
			target="_blank"
			class="group rounded border-2 border-black shadow-md transition duration-300 ease-out hover:translate-y-[-0.3rem] hover:scale-105 hover:shadow-lg"
			use:sound={[
				{
					sound: '/sounds/sweepdown.wav',
					event: 'mouseover'
				}
			]}
		>
			<Card.Root class="w-fit max-w-[420px]">
				<Card.Header class="flex items-center justify-center border-b-2 bg-green-200">
					<img
						class="-mt-24 max-h-60 translate-y-[2.5rem] transition duration-300 ease-out group-hover:translate-y-[1.4rem] group-hover:scale-110"
						src="/preview-zombie.png"
						alt="Crypto Zombies"
					/>
				</Card.Header>
				<Card.Content>
					<Card.Title class="mb-2 pt-4 text-2xl uppercase leading-none"
						>Solidity: Beginner to Intermediate Smart Contracts</Card.Title
					>
					<Card.Description class="text-lg"
						>Get up to speed with the basics of Solidity.</Card.Description
					>
				</Card.Content>
			</Card.Root>
		</a>
	</div>
</section>
