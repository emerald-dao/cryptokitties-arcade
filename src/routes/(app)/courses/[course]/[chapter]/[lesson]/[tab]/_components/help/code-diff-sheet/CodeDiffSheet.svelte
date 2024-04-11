<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { COURSES_COLORS } from '$courses/constants/colors';
	import type { TabContentWithType } from '../../../_types/tab-content.type';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import { beforeUpdate, afterUpdate } from 'svelte';
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

			const unsubscribe = codeStore.subscribe((value) => {
				userCode = value;
			});

			monaco.editor.defineTheme('my-dark', {
				base: 'vs-dark',
				inherit: true,
				rules: [],
				colors: {
					'editor.background': '#171717',
					'editor.lineHighlightBorder': '#171717',
					'editor.lineHighlightBackground': '#2b2a2a'
				}
			});

			monacoDiffEditor = monaco.editor.createDiffEditor(editorContainer, {
				theme: 'my-dark',
				readOnly: true,
				renderSideBySide: false,
				scrollBeyondLastLine: false,
				overviewRulerLanes: 0,
				renderOverviewRuler: false,
				showFoldingControls: 'never',
				lineNumbersMinChars: 4,
				lineDecorationsWidth: 0
			});

			monacoDiffEditor.setModel({
				original: monaco.editor.createModel(userCode, 'cadence'),
				modified: monaco.editor.createModel(tabContent.content.solutionCode, 'cadence')
			});

			unsubscribe();
		}
	}

	afterUpdate(() => {
		monacoDiffEditor?.dispose();
	});

	beforeUpdate(async () => {
		handleAskForHelp();
	});
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button
			variant="secondary"
			builders={[builder]}
			class={`text-lg ${COURSES_COLORS[color].askForHelp}`}>ASK FOR HELP</Button
		>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="font-pixel">
		<Sheet.Header class="flex flex-row items-center justify-between pb-2 pt-4">
			<Sheet.Title class="text-2xl uppercase">Help!</Sheet.Title>
		</Sheet.Header>
		<div bind:this={editorContainer} class="h-96 overflow-hidden rounded-[8px]"></div>
	</Sheet.Content>
</Sheet.Root>
