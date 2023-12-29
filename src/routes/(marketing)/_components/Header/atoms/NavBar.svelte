<script lang="ts">
    import { page } from "$app/stores";
    import { NAV_ITEMS } from "../config";
</script>

<div class="flex gap-x-8 font-vt323 text-sm">
    {#each NAV_ITEMS as nav_item }
        <a href={nav_item.href}
        class="{ nav_item.href === $page.url.pathname ? 'text-black' : 'text-gray-500' }">
        {nav_item.name}</a>
    {/each}
</div>