<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let color: keyof typeof COURSES_COLORS;
	export let image: string;
</script>

<div
	class="{COURSES_COLORS[color].background} flex min-h-full items-center justify-center border-2"
>
	<img src="/{image}.png" alt="" class="w-full" />
</div>
