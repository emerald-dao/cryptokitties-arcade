<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col gap-5">
	<h1 class="text-7xl">FLOW CATS NEED YOUR HELP!</h1>
	<h3 class="text-2xl">Learn about the Flow Blockchain while having fun.</h3>
	<Button href="/courses/1-save-ronald" class="group w-fit px-16 py-8 text-2xl">
		<span
			class="flex animate-pulse flex-row items-center transition duration-300 ease-in-out group-hover:text-green-200"
		>
			PLAY NOW
			<Icon
				icon="pixelarticons:play"
				class="ml-3 inline size-8 transition duration-300 ease-in-out"
			/>
		</span>
	</Button>
</div>
