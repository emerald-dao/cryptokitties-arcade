<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let color: keyof typeof COURSES_COLORS;
	export let image: string;
</script>

<div
	class="{COURSES_COLORS[color].background} flex items-center justify-center border-2 border-black"
>
	<img src="/{image}.png" alt="" class="py-6" />
</div>
