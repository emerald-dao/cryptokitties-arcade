<script lang="ts">
	import LessonArticle from './_components/lesson-article/LessonArticle.svelte';

	export let data;
</script>

<div class="grid h-full grid-cols-[420px_1fr] xl:grid-cols-[550px_1fr]">
	<div class="overflow-auto">
		<LessonArticle lessonContent={data.lessonContent} />
	</div>
	<slot />
</div>
