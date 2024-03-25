<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import type { CourseOverviewWithSlug } from '$courses/types/course-overview.interface';
	import CourseCardLabel from './components/CourseCardLabel.svelte';
	import { getCourseLevel } from '$lib/utils/getCourseLevel';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import * as Card from '$lib/components/ui/card';
	import { userFinishedLessons } from '$lib/stores/user-finished-lessons/userFinishedLessonsStore';
	import { getContext, onMount } from 'svelte';
	import MissionCompletedLabel from '../atoms/MissionCompletedLabel.svelte';

	let audio: HTMLAudioElement;

	onMount(() => {
		audio = new Audio('/sounds/clank.mp3');
	});

	export let course: CourseOverviewWithSlug;

	let coursesAmountOfLessons = getContext<{ [key: string]: number }>('coursesAmountOfLessons');
	let level = `MISSION ${getCourseLevel(course.slug)}`;

	$: userFinishedCourse =
		$userFinishedLessons.filter((lesson) => lesson.includes(course.slug))?.length ===
		coursesAmountOfLessons[course.slug];
</script>

<a
	class="block rounded border-2 border-solid border-border shadow-md transition duration-300 ease-out hover:translate-y-[-0.3rem] hover:shadow-lg"
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
	<Card.Root class="relative w-full">
		<div class="md:grid md:grid-cols-[2fr_3fr]">
			<div
				class="relative flex items-center justify-center border-r-2 p-6
			{COURSES_COLORS[course.color].askForHelp}
			"
			>
				<div class="absolute left-0 top-0">
					<CourseCardLabel>{level}</CourseCardLabel>
				</div>
				<img src="/{course.image}.png" alt="course cat" class="h-60" />
			</div>
			<div class="space-y-3 px-8 py-6 {COURSES_COLORS[course.color].background}">
				<h2 class="text-4xl uppercase">
					{course.name}
				</h2>
				<CourseCardLabel>{course.subject}</CourseCardLabel>
				<p class="text-lg leading-5">{course.excerpt}</p>
				<div class="absolute bottom-3 right-3">
					<MissionCompletedLabel isCompleted={userFinishedCourse} />
				</div>
			</div>
		</div>
	</Card.Root>
</a>
