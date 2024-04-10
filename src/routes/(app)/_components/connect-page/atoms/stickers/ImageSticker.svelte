<script lang="ts">
	import dragMe from '$lib/utils/draggMeAction';
	import sticker from './stickerAction';

	export let left: string;
	export let top: string;
	export let imageUrl: string;
</script>

<img
	use:sticker={{ left: left, top: top }}
	use:dragMe
	draggable="false"
	src={imageUrl}
	class="size-20 rounded-full border-2 shadow-sm"
	role="presentation"
/>
