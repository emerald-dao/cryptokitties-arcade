<script lang="ts">
	import { sound } from '$lib/utils/soundAction';
	import { builderActions, getAttrs, type Builder } from 'bits-ui';

	import { cn } from '$lib/utils';
	import { buttonVariants, type Props, type Events } from '.';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];
	export let href: $$Props['href'] = undefined;
	export { className as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	use:builderActions={{ builders }}
	{...getAttrs(builders)}
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{href}
	{...$$restProps}
	on:click
	on:keydown
	use:sound
>
	<slot />
</svelte:element>
