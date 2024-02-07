<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import LessonArticle from './_components/lesson-article/LessonArticle.svelte';
	import LessonTabs from './_components/lesson-tabs/LessonTabs.svelte';

	export let data;
</script>

<div class="grid flex-1 grid-cols-[550px_1fr]">
	<LessonArticle lessonContent={data.lessonContent} />
	<div
		class="border-l {COURSES_COLORS[data.course.color].background} flex flex-col justify-between"
	>
		<div class="flex h-full flex-col">
			<LessonTabs lessonOverview={data.lessonOverview} />
			<slot />
		</div>
	</div>
</div>
