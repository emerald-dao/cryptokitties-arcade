const sticker = (node: HTMLElement, position: { left: string; top: string }) => {
	node.style.top = position.top;
	node.style.left = position.left;
	node.style.position = 'absolute';
};

export default sticker;
