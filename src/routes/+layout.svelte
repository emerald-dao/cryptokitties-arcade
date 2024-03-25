<script lang="ts">
	import { setContext } from 'svelte';
	import '../app.pcss';
	import '../prism.css';
	import { onNavigate } from '$app/navigation';

	export let data;

	setContext('coursesAmountOfLessons', data.coursesAmountOfLessons);
</script>

<div class="flex h-svh overflow-hidden border bg-black font-pixel">
	<div class="m-[1%] flex flex-1 overflow-hidden rounded-xl bg-white">
		<div class="flex-1 overflow-hidden overflow-y-auto">
			<slot />
		</div>
	</div>
</div>
