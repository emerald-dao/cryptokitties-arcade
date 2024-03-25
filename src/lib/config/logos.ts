import { writable } from 'svelte/store';

export const EMOJIS_FOR_LOGO = ['😼', '😺', '😸', '😹', '😻', '😽', '🙀', '😿', '😾'];

export const getRandomLogo = () => {
	return EMOJIS_FOR_LOGO[Math.floor(Math.random() * EMOJIS_FOR_LOGO.length)];
};

export const activeLogo = writable(getRandomLogo());
