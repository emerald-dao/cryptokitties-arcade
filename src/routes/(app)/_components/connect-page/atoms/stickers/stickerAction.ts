const sticker = (node: HTMLElement, position: { left: string; top: string; rotation: number }) => {
	node.style.top = position.top;
	node.style.left = position.left;
	node.style.transform = `rotate(${position.rotation}deg)`;
	node.style.position = 'absolute';
};

export default sticker;
