<script lang="ts">
	import MarketingHeaderNavigation from './components/MarketingHeaderNavigation.svelte';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { user } from '$lib/stores/flow/FlowStore';
	import { checkUser } from '$lib/features/users/functions/checkUser';
	import { addUser } from '$lib/features/users/functions/postUser';
	import type { CurrentUserObject } from '@onflow/fcl';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

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

<div class="flex items-center justify-between border-b px-36 py-4">
	<FlowCatsLogo />
	<MarketingHeaderNavigation />
	<FlowConnect logIn={() => connect()} {unauthenticate} user={$user} />
</div>
