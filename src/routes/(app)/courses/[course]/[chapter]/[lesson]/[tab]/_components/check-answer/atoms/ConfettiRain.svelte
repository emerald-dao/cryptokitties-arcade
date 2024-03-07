<script lang="ts">
	import { Confetti } from 'svelte-confetti';
</script>

<div class="absolute left-[-400px] top-[-500px] flex h-screen w-screen justify-center">
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[500, 2000]}
		duration={7000}
		amount={300}
		fallDistance="100vh"
	/>
</div>
