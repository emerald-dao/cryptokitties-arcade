<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import * as Card from '$lib/components/ui/card';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext } from 'svelte';
	import MissionCompletedLabel from '../atoms/MissionCompletedLabel.svelte';

	export let course: CourseOverviewWithSlug;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let level = `MISSION ${getCourseLevel(course.slug)}`;

	$: userFinishedCourse =
		$userFinishedLessons.filter((lesson) => lesson.includes(course.slug))?.length ===
		coursesAmountOfLessons[course.slug];
</script>

<a
	class="group block h-full rounded border-2 border-solid border-border shadow-md transition duration-300 ease-out hover:translate-y-[-0.3rem] hover:scale-105 hover:shadow-lg"
	href="/courses/{course.slug}"
	use:sound={[
		{
			sound: '/sounds/sweepdown.wav',
			event: 'mouseover'
		},
		{
			sound: '/sounds/start-game.wav',
			event: 'click'
		}
	]}
>
	<Card.Root class="relative flex h-full w-full flex-col overflow-visible">
		<div
			class="relative flex items-center justify-center border-b-2 p-6
			{COURSES_COLORS[course.color].askForHelp}
			"
		>
			<div class="absolute left-0 top-0">
				<CourseCardLabel>{level}</CourseCardLabel>
			</div>
			<img
				src={course.image}
				alt="course cat"
				class="max-h-60 translate-y-[0.4rem] transition duration-300 ease-out group-hover:translate-y-[-0.6rem] group-hover:scale-110"
			/>
		</div>
		<div
			class="flex flex-1 flex-col justify-between space-y-3 px-8 py-6 {COURSES_COLORS[course.color]
				.background}"
		>
			<div class="space-y-3">
				<h2 class="text-4xl uppercase leading-none md:text-5xl">
					{course.name}
				</h2>
				<CourseCardLabel>{course.subject}</CourseCardLabel>
				<p class="text-lg leading-5">{course.excerpt}</p>
			</div>
			<MissionCompletedLabel isCompleted={userFinishedCourse} />
		</div>
	</Card.Root>
</a>
