<script lang="ts">
	import type { User } from '$lib/types/user/user.interface';
	import { Button } from '$lib/components/ui/button';
	import { Wallet } from 'lucide-svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';

	export let logIn: () => void;
	export let unauthenticate: () => void;
	export let user: User | null;

	function logOut() {
		userFinishedLessons.set([]);
		unauthenticate();
	}
</script>

{#if user?.addr}
	<div class="flex flex-col">
		{user.addr}
		<Button class="h-fit rounded-none bg-black py-0" on:click={logOut}>Disconnect</Button>
	</div>
{:else}
	<div class="flex items-center gap-3">
		<h4>Connect to track progress</h4>
		<Button class="rounded-none bg-black px-4 py-2" on:click={logIn}>
			Connect
			<Wallet />
		</Button>
	</div>
{/if}
