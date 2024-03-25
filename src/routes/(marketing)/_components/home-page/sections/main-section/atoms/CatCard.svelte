<script lang="ts">
	import { COURSES_COLORS } from '$courses/constants/colors';

	export let color: keyof typeof COURSES_COLORS;
	export let image: string;
</script>

<div
	class="{COURSES_COLORS[color]
		.background} flex w-full flex-1 items-center justify-center rounded border-2"
>
	<img src="/{image}.png" alt="Crypto kitties cat" class="w-full" />
</div>
