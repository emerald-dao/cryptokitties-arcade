const tailwindCss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindCssNesting = require('tailwindcss/nesting');

const config = {
	plugins: [
		tailwindCssNesting(),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindCss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
