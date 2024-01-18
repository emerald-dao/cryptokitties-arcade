<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let color: string;
</script>

<Button variant="secondary" class={`bg-${color}-300 rounded-none`}>CHECK ANSWER</Button>
