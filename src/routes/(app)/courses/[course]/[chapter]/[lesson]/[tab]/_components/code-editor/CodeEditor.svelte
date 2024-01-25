<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	export let code: { startingCode: string; solutionCode: string };

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	async function initializeMonaco() {
		monaco = (await import('./monaco')).default;
		if (editorContainer && monaco) {
			editor = monaco.editor.create(editorContainer, {
				automaticLayout: true,
				scrollBeyondLastLine: false,
				theme: 'vs-dark'
			});

			const model = monaco.editor.createModel(code.startingCode, 'javascript');
			editor.setModel(model);
		}
	}

	onMount(() => {
		initializeMonaco();
	});

	$: {
		if (editor) {
			const model = editor.getModel();
			if (model) {
				model.setValue(code.startingCode);
			} else {
				const newModel = monaco.editor.createModel(code.startingCode, 'javascript');
				editor.setModel(newModel);
			}
		}
	}

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});
</script>

<div class="flex-1" bind:this={editorContainer} />
