<script lang="ts">
	import dragMe from '$lib/utils/draggMeAction';
	import sticker from './stickerAction';
	import * as Card from '$lib/components/ui/card';
	import type { NftCollectionSticker } from '../../NFT_COLLECTIONS_STICKERS';

	export let nftCollection: NftCollectionSticker;
</script>

<div
	use:sticker={{ left: nftCollection.position.left, top: nftCollection.position.top }}
	use:dragMe
	class="absolute"
>
	<Card.Root class="rounded border-2">
		<div
			class="flex h-24 w-full flex-col items-center overflow-hidden overflow-visible px-2 text-xl {nftCollection.bg}"
		>
			<img
				draggable="false"
				src={nftCollection.image}
				alt=""
				class="-mt-[2rem] h-[calc(100%_+_2rem)]"
			/>
		</div>
		<Card.Content class="border-t-2 py-0 text-base">
			<span> {nftCollection.name} </span>
		</Card.Content>
	</Card.Root>
</div>
