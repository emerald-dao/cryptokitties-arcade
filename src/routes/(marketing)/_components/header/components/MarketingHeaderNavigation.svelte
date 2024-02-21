<script lang="ts">
	import { NAV_ITEMS } from '../config/MarketingHeaderNavigationItem';
</script>

<div class="flex gap-x-8 text-base">
	{#each NAV_ITEMS as nav_item}
		<a href={nav_item.href}>{nav_item.name}</a>
	{/each}
</div>
