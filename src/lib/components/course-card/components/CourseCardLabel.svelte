<script lang="ts">
	export let completeCard: boolean = false;
</script>

<p
	class:text-2xl={completeCard}
	class:px-6={completeCard}
	class:px-2={!completeCard}
	class="font-pixel w-fit bg-black py-2 uppercase text-white"
>
	<slot />
</p>
