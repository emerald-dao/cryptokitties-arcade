<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	export let data;

	let isSidebarOpen = true;
	let lessonNumberInUrl: number | null;

	$: if ($page.params.lesson) {
		handleActiveLesson();
	} else {
		lessonNumberInUrl = null;
	}

	function handleActiveLesson() {
		let lessonParam = $page.params.lesson;
		let match = lessonParam.match(/^(\d+)-/);
		lessonNumberInUrl = match ? parseInt(match[1]) : null;
	}
</script>

<div class={`grid flex-1 ${isSidebarOpen ? `grid-cols-[250px_1fr]` : `grid-cols-[80px_1fr]`}`}>
	<div
		class={`relative flex flex-col gap-3 border-r border-black bg-slate-100 py-6 ${
			isSidebarOpen ? `px-6` : ``
		}`}
	>
		<h3 class={`bg-black px-3 py-2 text-center text-white  ${isSidebarOpen ? '' : 'hidden'}`}>
			{data.chapter.title.toUpperCase()}
		</h3>
		{#each data.chapter.lessons as lesson, i}
			<ul>
				<li class={`${isSidebarOpen ? 'border' : 'border-y'} border-black`}>
					<a class={`${isSidebarOpen ? 'flex flex-row' : ''}`} href={`/courses/${lesson.slug}`}>
						<div
							class:bg-black={lessonNumberInUrl === i + 1}
							class:text-white={lessonNumberInUrl === i + 1}
							class={`flex items-center justify-center border-black px-2 py-1 ${
								isSidebarOpen ? 'border-r' : ''
							}`}
						>
							<p>{`${data.chapter.slug.match(/\/(\d+)-/)?.[1] || ''}.${i + 1}`}</p>
						</div>
						{#if isSidebarOpen}
							<div class="px-3 py-1">
								<p>{`${lesson.name.toUpperCase()}`}</p>
							</div>
						{/if}
					</a>
				</li>
			</ul>
		{/each}

		<Button
			variant="ghost"
			class={`absolute top-1/2 ${isSidebarOpen ? 'right-0' : '-right-6'} p-0 hover:bg-transparent`}
			on:click={() => (isSidebarOpen = !isSidebarOpen)}
		>
			{#if isSidebarOpen}
				<ChevronLeft />
			{:else}
				<ChevronRight />
			{/if}
		</Button>
	</div>
	<slot />
</div>
