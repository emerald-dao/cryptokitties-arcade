export interface DappSticker {
	name: string;
	logo: string;
	position: {
		left: string;
		top: string;
	};
}

export const DAPP_STICKERS: DappSticker[] = [
	{
		name: 'Emerald City DAO',
		logo: '/ecdao-logo.svg',
		position: {
			left: '24%',
			top: '5%'
		}
	}
];
