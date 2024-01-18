<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';

	export let value: number;
</script>

<div class="font-pixel flex items-center gap-1">
	<p>{value}%</p>
	<Progress {value} max={100} class="min-w-[15ch] rounded-none" />
</div>
