<script lang="ts">
	import AppSubHeader from '../../_components/app-sub-header/AppSubHeader.svelte';
	import AppHeader from '../../_components/header/AppHeader.svelte';

	export let data;
</script>

<AppHeader activeCourse={data.course} allCourses={data.courses} />
<AppSubHeader course={data.course} />
<section class="flex h-screen flex-col bg-slate-50">
	<div class="flex flex-col gap-5 border-b bg-slate-200 p-6">
		<div>
			<h1 class="text-2xl">{data.course.name}</h1>
			<p>{data.course.excerpt}</p>
		</div>
		<div class="flex flex-row items-center">
			{#each data.course.chapters as chapter}
				<ul>
					<li>
						<a href={`/courses/${chapter.slug}`}>{chapter.name} chapter</a>
					</li>
				</ul>
			{/each}
		</div>
	</div>
	<slot />
</section>
