<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="group border-t-2 border-solid border-border py-6 text-lg">
	<div class="section flex flex-col justify-between gap-4 lg:flex-row lg:gap-20">
		<div>
			<p class="group">
				Built with
				<Icon
					icon="pixelarticons:heart"
					class="inline text-red-400 group-hover:animate-bounce group-hover:text-green-400"
				/>
				by
				<a
					href="https://ecdao.org"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
				>
					Emerald City DAO
				</a>
			</p>
		</div>

		<div class="flex flex-col gap-4 sm:flex-row sm:gap-14 lg:gap-20">
			<div class="flex flex-col sm:flex-row sm:space-x-4">
				<a
					href="https://academy.ecdao.org/en"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
					>Emerald Academy</a
				>
				<a
					href="https://academy.ecdao.org/en"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
					>Flownaut</a
				>
				<a
					href="https://toucans.ecdao.org/"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
					>Toucans</a
				>
				<a
					href="https://toucans.ecdao.org/"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
					>FLOATs</a
				>
			</div>
			<div class="flex flex-col sm:flex-row sm:space-x-4">
				<a
					href="https://discord.com/invite/emerald-city-906264258189332541"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
					>Discord</a
				>
				<a
					href="https://twitter.com/emerald_dao"
					target="_blank"
					class="underline decoration-gray-300 transition-all duration-300 ease-in-out hover:decoration-green-400"
					>Twitter</a
				>
			</div>
		</div>
	</div>
</footer>
