<script lang="ts">
	import type { User } from '$lib/models/user.interface';
	import { Button } from '$lib/components/ui/button';
	import { Wallet } from 'lucide-svelte';

	export let logIn: () => void;
	export let unauthenticate: () => void;
	export let user: User | null;
</script>

{#if user?.addr}
	<div class="flex flex-col">
		{user.addr}
		<Button class="h-fit rounded-none bg-black py-0" on:click={unauthenticate}>Disconnect</Button>
	</div>
{:else}
	<Button class="rounded-none bg-black px-4 py-2" on:click={logIn}>
		Connect
		<Wallet />
	</Button>
{/if}
