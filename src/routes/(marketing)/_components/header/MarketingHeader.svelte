<script lang="ts">
	import MarketingHeaderNavigation from './components/MarketingHeaderNavigation.svelte';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { user } from '$lib/stores/flow/FlowStore';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { addUser } from '$lib/features/users/functions/postUser';
	import type { CurrentUserObject } from '@onflow/fcl';
	import Icon from '@iconify/svelte';
	import SoundToggle from '$lib/components/atoms/SoundToggle.svelte';

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

<header
	class="max-w-container z-50 mx-auto mt-6 flex items-center justify-between gap-1 rounded border-2 border-solid border-border bg-white px-4 py-1 shadow-md"
>
	<FlowCatsLogo />
	<MarketingHeaderNavigation />
	<div class="flex flex-row items-center gap-4">
		<SoundToggle />
		<FlowConnect
			logIn={() => connect()}
			{unauthenticate}
			user={$user}
			showProgressTrackingPrompt={false}
		/>
	</div>
</header>
