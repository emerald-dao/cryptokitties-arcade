<script lang="ts">
	import CheckAnswerButton from './_components/atoms/CheckAnswerButton.svelte';
	import HelpButton from './_components/atoms/HelpButton.svelte';
	import LessonArticle from './_components/lesson-article/LessonArticle.svelte';
	import LessonTabs from './_components/lesson-tabs/LessonTabs.svelte';

	export let data;
</script>

<div class="grid flex-1 grid-cols-[550px_1fr]">
	<LessonArticle lessonContent={data.lessonContent} />
	<div class={`border-l bg-${data.course.color}-200 flex flex-col justify-between`}>
		<div>
			<LessonTabs lessonOverview={data.lessonOverview} />
			<slot />
		</div>
		<div class="grid grid-cols-2">
			<HelpButton color={data.course.color} />
			<CheckAnswerButton color={data.course.color} />
		</div>
	</div>
</div>
