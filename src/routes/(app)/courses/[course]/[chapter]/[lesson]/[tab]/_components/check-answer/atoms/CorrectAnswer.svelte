<script lang="ts">
	import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface';
	import type { CourseOverviewWithChapters } from '$courses/types/course-overview.interface';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	export let activeCourse: CourseOverviewWithChapters;
	export let activeChapter: ChapterOverviewWithLessons;

	let newRoute = '';
	let activeLesson = parseInt($page.params.lesson.split('-')[0]);
	let activeChapterNumber = parseInt($page.params.course.split('-')[0]);

	function handleButtonClick() {
		if (activeLesson < activeChapter.lessons.length) {
			newRoute = '/courses/' + activeChapter.lessons[activeLesson].slug;
		} else if (activeChapterNumber < activeCourse.chapters.length) {
			newRoute = '/courses/' + activeCourse.chapters[activeChapterNumber].slug;
		} else {
			newRoute = '/';
		}
		goto(newRoute);
	}
</script>

<div class="flex flex-row items-center justify-between gap-4 px-4 py-6">
	<div>
		<p class="font-pixel text-lg">Excellent!</p>
		<p class="font-pixel text-lg">Keep going!</p>
	</div>
	<img src="/Cat.png" alt="cat" class="w-18 h-12" />
</div>
<div class="flex items-center justify-center">
	<Button class="rounded-none" on:click={handleButtonClick}>Continue</Button>
</div>
