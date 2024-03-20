<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	export let href = '/';
	export let pulse = false;
</script>

<Button {href} class="group">
	<span
		class={`inline-flex items-center font-pixel text-xl uppercase ${
			pulse
				? 'animate-pulse text-green-100 transition duration-300 ease-in-out group-hover:text-green-300'
				: ''
		}`}
	>
		<slot />
	</span>
</Button>
