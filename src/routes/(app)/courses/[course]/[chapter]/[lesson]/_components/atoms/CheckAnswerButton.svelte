<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';
	import { Button } from '$lib/components/ui/button';

	export let color: keyof typeof COURSES_COLORS;
</script>

<Button variant="secondary" class="{COURSES_COLORS[color].checkAnswer} rounded-none"
	>CHECK ANSWER</Button
>
