<script lang="ts">
	export let color: 'green' | 'pink' | 'purple' | 'yellow';
	export let image: string;

	const colorVariants = {
		green: 'bg-green-300',
		pink: 'bg-red-300',
		purple: 'bg-purple-300',
		yellow: 'bg-yellow-300'
	};
</script>

<div class="{colorVariants[color]} border border-black object-center">
	<img src="/{image}.png" alt="" />
</div>
