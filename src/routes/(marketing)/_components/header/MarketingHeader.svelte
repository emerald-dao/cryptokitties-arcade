<script lang="ts">
	import MarketingHeaderNavigation from './components/MarketingHeaderNavigation.svelte';
	import FlowCatsLogo from '$lib/components/atoms/FlowCatsLogo.svelte';
	import FlowConnect from '$lib/components/atoms/FlowConnect.svelte';
	import { logIn, unauthenticate } from '../../../../flow/actions';
	import { user } from '$lib/stores/flow/FlowStore';
	import { getUserCompletedLessons } from '$lib/features/users/functions/getUserCompletedLessons';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessons';

	const connect = async () => {
		logIn().then(async () => {
			let finishedLessons = await getUserCompletedLessons($user.addr);
			userFinishedLessons.set(finishedLessons);
		});
	};
</script>

<div class="flex items-center justify-between border-b border-black px-36 py-4 font-pixel">
	<FlowCatsLogo />
	<MarketingHeaderNavigation />
	<FlowConnect logIn={() => connect()} {unauthenticate} user={$user} />
</div>
