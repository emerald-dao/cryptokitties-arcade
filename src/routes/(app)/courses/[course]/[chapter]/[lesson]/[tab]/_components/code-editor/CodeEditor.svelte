<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import persistentWritable from '$lib/stores/custom/persistentWritable';
	import type { LessonTabOverviewWithSlug } from '$courses/types/lesson-tab-overview.interface';
	import { resizeEvent } from '$lib/stores/resize-event/resizeEventStore';

	export let defaultCode: string;
	export let tabOverview: LessonTabOverviewWithSlug;

	let codeStore = persistentWritable<string>(tabOverview.slug, defaultCode);

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	async function initializeMonaco() {
		monaco = (await import('./monaco')).default;
		if (editorContainer && monaco) {
			editor = monaco.editor.create(editorContainer, {
				scrollBeyondLastLine: false,
				theme: 'vs-dark',
				minimap: {
					enabled: false
				}
			});

			const model = monaco.editor.createModel($codeStore, 'javascript');
			editor.setModel(model);

			editor.onDidChangeModelContent(() => {
				codeStore.set(editor.getValue());
			});
		}
	}

	onMount(() => {
		initializeMonaco();
	});

	$: if (tabOverview.slug) {
		if (editor) {
			codeStore = persistentWritable(tabOverview.slug, defaultCode);
			let code: string = '';
			const unsubscribe = codeStore.subscribe((value) => {
				code = value;
			});

			const model = monaco.editor.createModel(code, 'javascript');
			editor.setModel(model);

			unsubscribe();
		}
	}

	$: if ($resizeEvent) {
		editor.layout({ width: 0, height: 0 });
		window.requestAnimationFrame(() => {
			if (editorContainer.parentElement) {
				const rect = editorContainer.parentElement.getBoundingClientRect();
				editor.layout({ width: rect.width, height: rect.height });
			}
		});
	}

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});
</script>

<div class="flex-grow">
	<div bind:this={editorContainer} class="h-full w-full" />
</div>
<svelte:window
	on:resize={() => {
		editor.layout({ width: 0, height: 0 });
		window.requestAnimationFrame(() => {
			if (editorContainer.parentElement) {
				const rect = editorContainer.parentElement.getBoundingClientRect();
				editor.layout({ width: rect.width, height: rect.height });
			}
		});
	}}
/>
