import * as monaco from 'monaco-editor';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
	getWorker: function (_: string, label: string) {
		switch (label) {
			case 'typescript':
			case 'javascript':
				return new tsWorker();
			default:
				return new editorWorker();
		}
	}
};

export default monaco;
