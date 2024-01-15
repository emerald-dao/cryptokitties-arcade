<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	export let data;

	let backgroundColor = `bg-${data.course.color}-200`;
	let helpBackground = `bg-${data.course.color}-100`;
	let reviewBackground = `bg-${data.course.color}-300`;
</script>

<div class="grid flex-1 grid-cols-[550px_1fr]">
	<article class="p-6">
		<svelte:component this={data.lessonContent} />
	</article>
	<div class="border-l bg-slate-100 {backgroundColor} flex flex-col justify-between">
		<div>
			<div class="flex flex-row items-start">
				{#each data.lessonOverview.tabs as tab}
					<a class="border border-slate-400 bg-slate-300 p-3" href={`/courses/${tab.slug}`}
						>{tab.name}</a
					>
				{/each}
			</div>
			<slot />
		</div>
		<div class="grid grid-cols-2">
			<Popover.Root>
				<Popover.Trigger asChild let:builder>
					<Button variant="secondary" class="{helpBackground} rounded-none" builders={[builder]}
						>ASK FOR HELP</Button
					>
				</Popover.Trigger>
				<Popover.Content class="w-80">
					<div class="space-y-2">
						<h4 class="font-medium leading-none">Help!</h4>
						<p class="border-2 p-2 text-sm text-muted-foreground">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque facere quo maiores
							obcaecati minima at iusto sint ratione, fuga pariatur!
						</p>
					</div>
				</Popover.Content>
			</Popover.Root>
			<Button variant="secondary" class="{reviewBackground} rounded-none">CHECK ANSWER</Button>
		</div>
	</div>
</div>
