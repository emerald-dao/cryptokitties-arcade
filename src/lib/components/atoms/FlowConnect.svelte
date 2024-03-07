<script lang="ts">
	import type { User } from '$lib/types/user/user.interface';
	import { Button } from '$lib/components/ui/button';
	import { Wallet } from 'lucide-svelte';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import Icon from '@iconify/svelte';

	export let logIn: () => void;
	export let unauthenticate: () => void;
	export let user: User | null;
	export let showProgressTrackingPrompt = true;

	function logOut() {
		userFinishedLessons.set([]);
		unauthenticate();
	}
</script>

{#if user?.addr}
	<div class="flex flex-row items-center justify-center gap-3">
		<div
			class="relative inline-flex items-center justify-center bg-primary px-4 py-2 text-primary-foreground"
		>
			<Icon icon="pixelarticons:wallet" class="mr-1 size-4" />
			{user.addr}
		</div>
		<button on:click={logOut}>
			<Icon icon="pixelarticons:logout" class="size-4" />
		</button>
	</div>
{:else}
	<div class="flex items-center gap-3">
		{#if showProgressTrackingPrompt}
			<h4 class="text-sm">Connect to track progress</h4>
		{/if}
		<Button class="gap-1 px-4 py-2" on:click={logIn}>
			Connect
			<Icon icon="pixelarticons:wallet" class="size-4" />
		</Button>
	</div>
{/if}
