<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col gap-2 sm:gap-5">
	<h1 class="text-4xl uppercase leading-8 tracking-tight sm:text-8xl">
		Crypto kitties need your help!
	</h1>
	<div class="flex flex-col items-start gap-4 md:flex-row md:items-center">
		<Button
			href="/courses/1-save-ronald"
			class="group peer w-fit px-8 py-2 text-xl transition ease-out hover:translate-y-[-0.2rem] hover:shadow-sm sm:px-16 sm:py-8 sm:text-2xl"
		>
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
		<div class="flex flex-row items-center gap-2">
			<span class="peer-hover:rainbow-text-animated text-xl uppercase"
				>An adventure built on
				<img src="/flow-logo.svg" alt="Flow logo" class="mr-[-0.3rem] mt-[-0.2rem] inline size-6" />
				Flow
			</span>
		</div>
	</div>
</div>
