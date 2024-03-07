<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let color: keyof typeof COURSES_COLORS;
	export let image: string;
</script>

<div
	class="{COURSES_COLORS[color]
		.background} flex flex-1 items-center justify-center border-2 shadow-sm"
>
	<img src="/{image}.png" alt="" class="py-6" />
</div>
