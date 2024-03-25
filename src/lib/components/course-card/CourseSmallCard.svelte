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
	class="block w-full rounded border-2 border-solid border-border shadow-md transition duration-300 ease-out hover:translate-y-[-0.3rem] hover:shadow-lg"
	href="/courses/{course.slug}"
	use:sound={[
		{
			sound: '/sounds/sweepdown.wav',
			event: 'mouseover'
		},
		{
			sound: '/sounds/retro-click.mp3',
			event: 'click'
		}
	]}
>
	<Card.Root class={`relative w-full space-y-4 p-4 ${COURSES_COLORS[course.color].background}`}>
		<div class="flex flex-row gap-2">
			<CourseCardLabel>{level}</CourseCardLabel>
			<CourseCardLabel>{course.subject}</CourseCardLabel>
		</div>
		<h2 class="text-4xl uppercase leading-9">
			{course.name}
		</h2>
		<MissionCompletedLabel isCompleted={userFinishedCourse} />
	</Card.Root>
</a>
