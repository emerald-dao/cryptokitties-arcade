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
					.background} relative hidden items-center justify-center p-[3%] sm:flex sm:flex-col"
			>
				<div class="absolute left-1 top-1">
					<CourseCardLabel>{level}</CourseCardLabel>
				</div>
				<img
					src="/{course.image}.png"
					alt="course cat"
					class:max-w-50={isCompleteCourseCard}
					class:md:max-w-56={isCompleteCourseCard}
					class:lg:max-w-64={isCompleteCourseCard}
					class:max-w-32={!isCompleteCourseCard}
					class="px-2"
				/>
			</Card.Header>
			<Card.Content
				class="col-span-3 flex flex-col justify-center gap-[5%] px-[5%] sm:col-span-2 sm:justify-normal"
			>
				<h2
					class:pt-3={!isCompleteCourseCard}
					class:text-3xl={isCompleteCourseCard}
					class:sm:text-5xl={isCompleteCourseCard}
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
