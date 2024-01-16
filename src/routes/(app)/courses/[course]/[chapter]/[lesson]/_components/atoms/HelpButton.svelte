<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';

	export let color: string;
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button variant="secondary" class={`bg-${color}-100 rounded-none`} builders={[builder]}
			>ASK FOR HELP</Button
		>
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="space-y-2">
			<h4 class="font-medium leading-none">Help!</h4>
			<p class="border-2 p-2 text-sm text-muted-foreground">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque facere quo maiores obcaecati
				minima at iusto sint ratione, fuga pariatur!
			</p>
		</div>
	</Popover.Content>
</Popover.Root>
