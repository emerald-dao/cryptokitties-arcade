<script lang="ts">
	import Icon from '@iconify/svelte';

	export let isCompleted: Boolean;
</script>

{#if isCompleted}
	<div class="flex w-fit flex-row items-center gap-1 border-2 bg-green-300 px-3 uppercase">
		<Icon icon="pixelarticons:check" inline />
		Mission Completed
	</div>
{:else}
	<div class="flex w-fit flex-row items-center gap-1 border-2 bg-red-300 px-3 uppercase">
		<Icon icon="pixelarticons:close" inline />
		Mission Not Completed
	</div>
{/if}
