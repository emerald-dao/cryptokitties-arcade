<script lang="ts">
	import MarketingHeaderNavigation from './components/MarketingHeaderNavigation.svelte';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { user } from '$lib/stores/flow/FlowStore';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { addUser } from '$lib/features/users/functions/postUser';
	import type { CurrentUserObject } from '@onflow/fcl';

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

<header class="border-b-2 border-solid border-border py-4">
	<div class="section flex items-center justify-between">
		<FlowCatsLogo />
		<MarketingHeaderNavigation />
		<FlowConnect
			logIn={() => connect()}
			{unauthenticate}
			user={$user}
			showProgressTrackingPrompt={false}
		/>
	</div>
</header>
