<script lang="ts">
	export let courseImage: string;
</script>

<div class="flex flex-row items-center justify-between gap-4 px-4 py-6 font-pixel">
	<div class="text-lg">
		<p>Wrong answer!</p>
		<p>Keep trying!</p>
	</div>
	<img src="/{courseImage}.png" alt="cat" class="w-28" />
</div>
