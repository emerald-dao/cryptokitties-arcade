<script lang="ts">
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import * as Card from '$lib/components/ui/card';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { addUser } from '$lib/features/users/functions/postUser';
	import { user } from '$lib/stores/flow/FlowStore';
	import type { CurrentUserObject } from '@onflow/fcl';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';

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
		class="flex flex-col items-center justify-center gap-2 border-l-2 bg-green-200 p-[20%] text-4xl"
	>
		<h3 class="block">
			#why<span class="rainbow-text-animated text-transparent">build</span>onflow
		</h3>
		<Card.Root class="w-full rounded border-2 shadow-md">
			<Card.Header>
				<Card.Description class="text-xl leading-tight"
					>Because Flow is 100% EVM compatible which means that Ethereum contracts can be deployed
					easily.</Card.Description
				>
			</Card.Header>
			<Card.Footer class="flex flex-col items-start">
				<div class="flex flex-row items-center gap-2">
					<img src="/jacob-avatar.jpg" alt="Avatar" class="size-9 rounded-xl" />
					<a href="https://twitter.com/jacobmtucker" target="_blank" class="text-xl underline"
						>@jacobmtucker</a
					>
				</div>
				<p class="text-lg">Emerald City founder.</p>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
