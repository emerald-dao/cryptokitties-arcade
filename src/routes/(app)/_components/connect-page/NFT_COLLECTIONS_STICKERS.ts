export interface NftCollectionSticker {
	name: string;
	image: string;
	bg: string;
	position: {
		left: string;
		top: string;
		rotation: number;
	};
}

export const NFT_COLLECTIONS_STICKERS: NftCollectionSticker[] = [
	{
		name: 'CryptoKitties',
		image: '/images/cats/sailor-cat.png',
		bg: 'bg-blue-200',
		position: {
			left: '10%',
			top: '15%',
			rotation: 5
		}
	},
	{
		name: 'Ballerz',
		image: '/images/nft-collections/ballerz.png',
		bg: 'bg-green-200',
		position: {
			left: '70%',
			top: '80%',
			rotation: 2
		}
	},
	{
		name: 'Doodles',
		image: '/images/nft-collections/doodles.png',
		bg: 'bg-pink-200',
		position: {
			left: '15%',
			top: '74%',
			rotation: -4
		}
	}
];
