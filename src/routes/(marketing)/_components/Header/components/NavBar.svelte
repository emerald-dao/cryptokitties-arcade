<script lang="ts">
	import { page } from '$app/stores';
	import { NAV_ITEMS } from '../config/navItem';
</script>

<div class="flex gap-x-8 font-pixel text-sm">
	{#each NAV_ITEMS as nav_item}
		<a href={nav_item.href}> {nav_item.name}</a>
	{/each}
</div>
