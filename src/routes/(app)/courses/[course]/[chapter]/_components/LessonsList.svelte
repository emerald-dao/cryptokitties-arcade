<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';

	export let chapter: ChapterOverviewWithLessons;
	export let isSidebarOpen: boolean;
	export let lessonNumberInUrl: number | null;
</script>

{#each chapter.lessons as lesson, i}
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
					<p>{`${chapter.slug.match(/\/(\d+)-/)?.[1] || ''}.${i + 1}`}</p>
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
