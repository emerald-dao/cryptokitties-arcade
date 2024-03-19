<script lang="ts">
	import Icon from '@iconify/svelte';
	import CorrectAnswerDialogContainer from './atoms/CorrectAnswerDialogContainer.svelte';
	import CorrectAnswerDialogButton from './atoms/CorrectAnswerDialogButton.svelte';
	import CorrectAnswerDialogTitle from './atoms/CorrectAnswerDialogTitle.svelte';
	import CorrectAnswerDialogSubtitle from './atoms/CorrectAnswerDialogSubtitle.svelte';
</script>

<CorrectAnswerDialogContainer>
	<CorrectAnswerDialogSubtitle />
	<CorrectAnswerDialogTitle>You've finished all courses</CorrectAnswerDialogTitle>
	<CorrectAnswerDialogButton>
		<Icon icon="pixelarticons:home" class="mr-2 h-6 w-6" />
		Home
	</CorrectAnswerDialogButton>
</CorrectAnswerDialogContainer>
