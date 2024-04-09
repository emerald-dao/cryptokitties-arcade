<script lang="ts">
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '@iconify/svelte';
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

<section class="flex h-full flex-1 flex-col items-center justify-center gap-7 uppercase">
	<Button variant="ghost" href="/" class="none group flex w-fit items-center gap-x-1 p-1">
		<Icon icon="pixelarticons:arrow-left" />
		GO HOME
	</Button>
	<FlowCatsLogo />
	<p class="max-w-[40ch] text-center text-lg leading-tight">
		Please connect your Flow wallet to continue
	</p>
	<FlowConnect
		showProgressTrackingPrompt={false}
		logIn={() => connect()}
		{unauthenticate}
		user={$user}
	/>
</section>
