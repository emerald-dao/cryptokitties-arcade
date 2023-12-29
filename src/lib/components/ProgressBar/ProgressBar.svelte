<script lang="ts">
	import { Progress } from '../ui/progress';

	export let value: number;
</script>

<div class="font-vt323 flex items-center gap-1">
	<p>{value}%</p>
	<Progress {value} max={100} class="w-[15ch] rounded-none" />
</div>
