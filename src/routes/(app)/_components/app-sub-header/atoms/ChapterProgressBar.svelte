<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';

	export let value: number;
</script>

<div class="flex items-center gap-2">
	<p class="text-base">{value}%</p>
	<Progress {value} max={100} class="min-w-[15ch] rounded-none border-2 bg-background" />
</div>
