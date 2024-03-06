<script>
	import { setContext } from 'svelte';
	import '../app.pcss';
	import '../prism.css';

	export let data;

	setContext('coursesAmountOfLessons', data.coursesAmountOfLessons);
</script>

<div class="font-pixel">
	<slot />
</div>
