<script lang="ts">
	import NavBar from './components/atoms/NavBar.svelte';
	import FlowCats from '$lib/components/atoms/FlowCats.svelte';
	import { FlowConnect } from '@emerald-dao/component-library';
</script>

<div class="flex justify-between border-b border-black px-36 py-8">
	<FlowCats />
	<NavBar />
	<div></div>
	<!-- <FlowConnect/> -->
</div>
