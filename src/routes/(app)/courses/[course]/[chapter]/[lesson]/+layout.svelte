<script lang="ts">
	import LessonArticle from './_components/lesson-article/LessonArticle.svelte';

	export let data;
</script>

<div class="grid h-full grid-cols-[1fr_1fr]">
	<div class="article-wrapper overflow-y-auto overflow-x-hidden">
		<LessonArticle lessonContent={data.lessonContent} />
	</div>
	<slot />
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply w-2 border-0;
	}
	::-webkit-scrollbar-thumb {
		@apply border-0;
	}
</style>
