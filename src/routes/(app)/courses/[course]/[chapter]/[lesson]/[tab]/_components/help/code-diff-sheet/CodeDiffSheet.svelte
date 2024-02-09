<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { TabContentWithType } from '../../../_types/tab-content.type';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import { onDestroy } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	export let color: keyof typeof COURSES_COLORS;
	export let tabContent: TabContentWithType;
	export let tabOverview: LessonTabOverviewWithSlug;

	let userCode: string;
	let monaco: typeof Monaco;
	let monacoDiffEditor: Monaco.editor.IStandaloneDiffEditor;
	let editorContainer: HTMLElement;

	async function handleAskForHelp() {
		monaco = (await import('../../code-editor/monaco')).default;
		if (editorContainer && monaco && tabContent.type === 'code') {
			let codeStore = persistentWritable<string>(tabOverview.slug, tabContent.content.startingCode);
			codeStore.subscribe((value) => {
				userCode = value;
			});

			monacoDiffEditor = monaco.editor.createDiffEditor(editorContainer, {
				readOnly: true,
				renderSideBySide: false,
				originalEditable: false,
				ignoreTrimWhitespace: true,
				scrollBeyondLastLine: false,
				theme: 'vs-dark'
			});

			monacoDiffEditor.setModel({
				original: monaco.editor.createModel(userCode, 'cadence'),
				modified: monaco.editor.createModel(tabContent.content.solutionCode, 'cadence')
			});
		}
	}

	onDestroy(() => {
		monacoDiffEditor?.dispose();
	});
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button
			variant="secondary"
			builders={[builder]}
			class="{COURSES_COLORS[color].askForHelp} rounded-none"
			on:click={handleAskForHelp}>ASK FOR HELP</Button
		>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header class="flex flex-row items-center justify-between">
			<Sheet.Title class="font-pixel">Help!</Sheet.Title>
			<img src="/Cat.png" alt="cat" class="w-18 h-12 pr-4" />
		</Sheet.Header>
		<div bind:this={editorContainer} class="h-96"></div>
		<Sheet.Footer class="pt-6">
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit" class="rounded-none bg-black font-pixel "
					>Close</Button
				>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
