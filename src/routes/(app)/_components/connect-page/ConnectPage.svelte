<script lang="ts">
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { addUser } from '$lib/features/users/functions/postUser';
	import { user } from '$lib/stores/flow/FlowStore';
	import type { CurrentUserObject } from '@onflow/fcl';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import TWEETS from './TWEETS';
	import TweetCard from './atoms/TweetCard.svelte';
	import Stickers from './atoms/Stickers.svelte';

	const connect = async () => {
		logIn().then(async () => {
			const userExists = await checkUser($user.addr);

			if (userExists.length > 0) {
				console.log('User exists');
			} else {
				addUser($user as CurrentUserObject);
			}
		});
	};
</script>

<section class="grid h-full grid-cols-[2fr_3fr] gap-7">
	<div class="flex flex-col justify-center gap-6 p-[20%]">
		<div class="absolute left-10 top-6">
			<FlowCatsLogo />
		</div>
		<p class="max-w-[40ch] text-2xl leading-tight">Connect your Flow wallet to enter the mission</p>
		<FlowConnect
			showProgressTrackingPrompt={false}
			logIn={() => connect()}
			{unauthenticate}
			user={$user}
			size="lg"
		/>
	</div>
	<div
		class="relative flex flex-col items-center justify-center overflow-hidden border-l-2 bg-green-300 p-[12%] text-4xl"
	>
		<Stickers />
		<h3 class="block uppercase">
			why build <span class="rainbow-text-animated text-transparent">#onflow</span>
		</h3>
		<Carousel.Root
			class="w-full max-w-[700px]"
			opts={{
				loop: true
			}}
		>
			<Carousel.Content>
				{#each TWEETS as tweet}
					<Carousel.Item class="flex w-full flex-col justify-center p-4">
						<div>
							<TweetCard {tweet} />
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>
</section>
