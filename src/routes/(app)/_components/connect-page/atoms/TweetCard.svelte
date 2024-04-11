<script lang="ts">
	import type { Tweet } from '../TWEETS';
	import * as Card from '$lib/components/ui/card';

	export let tweet: Tweet;
</script>

<Card.Root class="w-full rounded border-2 shadow-md">
	<Card.Header>
		<Card.Description class="text-xl leading-tight text-primary">{tweet.text}</Card.Description>
	</Card.Header>
	<Card.Footer class="flex flex-col items-start">
		<div class="flex flex-row items-center gap-2">
			<img
				src={tweet.user.avatar}
				alt={`${tweet.user.username} avatar`}
				class="size-8 rounded-xl border-2"
			/>
			<a href={`https://x.com/${tweet.user.username}`} target="_blank" class="text-lg">
				{`@${tweet.user.username}`}
			</a>
		</div>
		<p class="text-sm opacity-60">{tweet.user.description}</p>
	</Card.Footer>
</Card.Root>
