<script lang="ts">
    // import { user } from '$lib/stores/flow/FlowStore';
	// import { logIn, unauthenticate } from '$flow/actions'; No se como se hace esto
    import NavBar from "./atoms/NavBar.svelte";
    import FlowCats from "$lib/atoms/FlowCats.svelte";
    import { FlowConnect } from '@emerald-dao/component-library';
</script>

<div class="flex justify-between py-8 px-36 border-b border-black">
    <FlowCats/>
    <NavBar/>
    <div>
    </div>
    <!-- <FlowConnect/> -->
</div>