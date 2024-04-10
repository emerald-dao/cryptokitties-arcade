function dragMe(node: HTMLElement) {
	let moving = false;
	let left = node.offsetLeft;
	let top = node.offsetTop;

	node.style.top = `${top}px`;
	node.style.left = `${left}px`;
	node.style.position = 'absolute';
	node.style.cursor = 'move';
	node.style.userSelect = 'none';

	node.addEventListener('mousedown', () => {
		moving = true;
	});

	window.addEventListener('mousemove', (e) => {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
			node.style.top = `${top}px`;
			node.style.left = `${left}px`;
		}
	});

	window.addEventListener('mouseup', () => {
		moving = false;
	});
}

export default dragMe;
