export interface DappSticker {
	name: string;
	logo: string;
	position: {
		left: string;
		top: string;
		rotation: number;
	};
}

export const DAPP_STICKERS: DappSticker[] = [
	{
		name: 'Emerald City DAO',
		logo: '/images/logos/ecdao-logo.svg',
		position: {
			left: '24%',
			top: '5%',
			rotation: -10
		}
	}
];
