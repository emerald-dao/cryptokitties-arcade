<script lang="ts">
	import dragMe from '$lib/utils/draggMeAction';
	import ImageSticker from './stickers/ImageSticker.svelte';
	import sticker from './stickers/stickerAction';
	import DappSticker from './stickers/DappSticker.svelte';
	import { DAPP_STICKERS } from '../DAPPS_STICKERS';
	import NftCollectionSticker from './stickers/NftCollectionSticker.svelte';
	import { NFT_COLLECTIONS_STICKERS } from '../NFT_COLLECTIONS_STICKERS';
</script>

{#each NFT_COLLECTIONS_STICKERS as nftCollectionSticker}
	<NftCollectionSticker nftCollection={nftCollectionSticker} />
{/each}
{#each DAPP_STICKERS as dappSticker}
	<DappSticker dapp={dappSticker} />
{/each}
<ImageSticker left="7%" top="84%" imageUrl="/flow-logo.svg" />
<img
	use:sticker={{ left: '65%', top: '17%' }}
	use:dragMe
	draggable="false"
	src="/nba-top-shot-logo.png"
	class="h-14 w-44 rounded border-2 bg-white object-cover"
	role="presentation"
	alt=""
/>
<ImageSticker left="60%" top="8%" imageUrl="/flow-logo.svg" />
