<script lang="ts">
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import * as Card from '$lib/components/ui/card';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { Check } from 'lucide-svelte';
	import { getContext } from 'svelte';

	export let course: CourseOverviewWithSlug;
	export let isCompleteCourseCard = false;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let level = `LEVEL ${getCourseLevel(course.slug)}`;

	$: userFinishedCourse =
		$userFinishedLessons.filter((lesson) => lesson.includes(course.slug))?.length ===
		coursesAmountOfLessons[course.slug];
</script>

<Card.Root class="relative w-full">
	<a
		class:min-w-96={!isCompleteCourseCard}
		class="block border-2 border-solid border-border shadow-md"
		href="/courses/{course.slug}"
	>
		<div
			class="grid grid-cols-3 gap-2"
			class:min-h-64={isCompleteCourseCard}
			class:min-h-36={!isCompleteCourseCard}
		>
			<Card.Header
				class="{COURSES_COLORS[course.color]
					.background} relative flex flex-col items-center px-[3%] pb-0 pt-[3%]"
			>
				<div class="absolute left-1 top-1">
					<CourseCardLabel>{level}</CourseCardLabel>
				</div>
				<img
					src="/{course.image}.png"
					alt="course cat"
					class:max-w-64={isCompleteCourseCard}
					class:max-w-32={!isCompleteCourseCard}
					class="bottom-0 px-2 pt-6"
				/>
			</Card.Header>
			<Card.Content class="col-span-2 flex flex-col gap-[5%] px-[5%]">
				<h2
					class:pt-3={!isCompleteCourseCard}
					class:text-5xl={isCompleteCourseCard}
					class:text-lg={!isCompleteCourseCard}
					class="uppercase"
				>
					{course.name}
				</h2>
				<CourseCardLabel {isCompleteCourseCard}>{course.subject}</CourseCardLabel>
				{#if isCompleteCourseCard}
					<h3 class="text-xl">{course.subject}</h3>
				{/if}
				{#if userFinishedCourse}
					<div
						class:p-4={isCompleteCourseCard}
						class:p-2={!isCompleteCourseCard}
						class="absolute bottom-0 right-0"
					>
						<Check
							class="{isCompleteCourseCard ? 'h-8 w-8' : 'h-4 w-4'} bg-green-600 text-green-200"
						/>
					</div>
				{/if}
			</Card.Content>
		</div>
	</a>
</Card.Root>
