<span
	class="rainbow-text-animated text-center font-pixel text-2xl uppercase leading-7 text-transparent"
	><slot>Congratulations</slot></span
>

<style>
	.rainbow-text-animated {
		background: linear-gradient(
			to right,
			theme('colors.purple.500'),
			theme('colors.blue.500'),
			theme('colors.green.500'),
			theme('colors.red.500'),
			theme('colors.pink.500')
		);
		-webkit-background-clip: text;
		background-clip: text;
		animation: rainbow_animation 6s ease-in-out infinite;
		background-size: 400% 100%;
	}

	@keyframes rainbow_animation {
		0%,
		100% {
			background-position: 0 0;
		}

		50% {
			background-position: 100% 0;
		}
	}
</style>
