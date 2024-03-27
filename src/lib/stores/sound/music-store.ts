import { writable } from 'svelte/store';

export const musicStore = writable({
	isPlaying: false,
	activeSong: 0
});

export const MUSIC_SELECTION = [
	{
		name: 'Sharp Edges',
		artist: 'artist1',
		src: '/music/sharp-edges.mp3'
	},
	{
		name: 'Cover',
		src: '/music/cover.mp3',
		artist: 'fewfe'
	},
	{
		name: 'Dorris',
		src: '/music/dorris.mp3',
		artist: 'artist3'
	}
];
