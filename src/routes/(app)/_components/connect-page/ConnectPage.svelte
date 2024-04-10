<script lang="ts">
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { addUser } from '$lib/features/users/functions/postUser';
	import { user } from '$lib/stores/flow/FlowStore';
	import type { CurrentUserObject } from '@onflow/fcl';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import dragMe from '$lib/utils/draggMeAction';

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

<section class="grid h-full grid-cols-[2fr_3fr] gap-7 uppercase">
	<div class="flex flex-col justify-center gap-6 p-[20%]">
		<div class="absolute left-10 top-6">
			<FlowCatsLogo />
		</div>
		<p class="max-w-[40ch] text-2xl leading-tight">Please connect your Flow wallet to continue</p>
		<FlowConnect
			showProgressTrackingPrompt={false}
			logIn={() => connect()}
			{unauthenticate}
			user={$user}
		/>
	</div>
	<div
		class="relative flex flex-col items-center justify-center gap-2 overflow-hidden border-l-2 bg-green-200 p-[20%] text-4xl"
	>
		<div class="absolute left-16 top-14" use:dragMe>
			<Card.Root class="rounded border-2 shadow-sm">
				<div class="flex h-20 w-full flex-col items-center overflow-hidden bg-red-200 p-1 text-xl">
					<img draggable="false" src="/medieval-cat.png" alt="" class="h-full" />
				</div>
				<Card.Content class="border-t-2 py-0 text-base">
					<span> CryptoKitties </span>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="absolute left-[65%] top-7" use:dragMe>
			<Card.Root class="rounded border-2 shadow-sm">
				<div class="flex h-20 w-full flex-col items-center overflow-hidden bg-red-200 p-1 text-xl">
					<img draggable="false" src="/medieval-cat.png" alt="" class="h-full" />
				</div>
				<Card.Content class="border-t-2 py-0 text-base">
					<span> CryptoKitties </span>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="absolute left-[70%] top-[80%]" use:dragMe>
			<Card.Root class="rounded border-2 shadow-sm">
				<div
					class="flex h-20 w-full flex-col items-center overflow-hidden bg-yellow-200 p-1 text-xl"
				>
					<img draggable="false" src="/medieval-cat.png" alt="" class="h-full" />
				</div>
				<Card.Content class="border-t-2 py-0 text-base">
					<span> CryptoKitties </span>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="absolute left-[10%] top-[78%]" use:dragMe>
			<img
				draggable="false"
				src="/flow-logo.svg"
				alt="Flow logo"
				class="size-20 rounded-full border-2 shadow-sm"
			/>
		</div>
		<div class="absolute left-[80%] top-[71%]" use:dragMe>
			<img
				draggable="false"
				src="/flow-logo.svg"
				alt="Flow logo"
				class="size-20 rounded-full border-2 shadow-sm"
			/>
		</div>
		<h3 class="block">
			build<span class="rainbow-text-animated text-transparent">#onflow</span>
		</h3>
		<Carousel.Root>
			<Carousel.Content>
				<Carousel.Item>
					<div class="p-4">
						<Card.Root class="w-full rounded border-2 shadow-md">
							<Card.Header>
								<Card.Description class="text-xl leading-tight"
									>"Because Flow is 100% EVM compatible which means that Ethereum contracts can be
									deployed easily."</Card.Description
								>
							</Card.Header>
							<Card.Footer class="flex flex-col items-start">
								<div class="flex flex-row items-center gap-2">
									<img src="/jacob-avatar.jpg" alt="Avatar" class="size-9 rounded-xl" />
									<a
										href="https://twitter.com/jacobmtucker"
										target="_blank"
										class="text-xl underline">@jacobmtucker</a
									>
								</div>
								<p class="text-lg">Emerald City founder.</p>
							</Card.Footer>
						</Card.Root>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class="p-4">
						<Card.Root class="w-full rounded border-2 shadow-md">
							<Card.Header>
								<Card.Description class="text-xl leading-tight"
									>Because Flow is 100% EVM compatible which means that Ethereum contracts can be
									deployed easily.</Card.Description
								>
							</Card.Header>
							<Card.Footer class="flex flex-col items-start">
								<div class="flex flex-row items-center gap-2">
									<img src="/jacob-avatar.jpg" alt="Avatar" class="size-9 rounded-xl" />
									<a
										href="https://twitter.com/jacobmtucker"
										target="_blank"
										class="text-xl underline">@jacobmtucker</a
									>
								</div>
								<p class="text-lg">Emerald City founder.</p>
							</Card.Footer>
						</Card.Root>
					</div>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>
</section>
