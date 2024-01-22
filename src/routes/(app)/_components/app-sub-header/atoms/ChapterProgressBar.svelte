<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';

	export let value: number;
</script>

<div class="flex items-center gap-1 font-pixel">
	<p>{value}%</p>
	<Progress {value} max={100} class="w-[15ch] rounded-none" />
</div>
