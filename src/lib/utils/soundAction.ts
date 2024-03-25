import { isSoundActive } from '$lib/stores/sound/sound-store';
import { get } from 'svelte/store';

export const sound = (
	node: HTMLElement,
	sounds: {
		sound: string;
		event: 'click' | 'mouseover';
	}[] = [
		{
			sound: '/sounds/retro-click.mp3',
			event: 'click'
		}
	]
) => {
	sounds.forEach((props) => {
		const audio = new Audio(props.sound);

		let inside = false;

		node.addEventListener(props.event, (e) => {
			if (props.event === 'mouseover') {
				if (inside) return;
				inside = true;
			}

			if (get(isSoundActive)) {
				audio.play();
			}
		});

		if (props.event === 'mouseover') {
			node.addEventListener('mouseleave', () => {
				inside = false;
			});
		}
	});
};
