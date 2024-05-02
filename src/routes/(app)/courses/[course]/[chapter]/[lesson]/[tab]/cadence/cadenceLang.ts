import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

export const CADENCE_LANGUAGE_ID = 'cadence';

export default function configureCadence(monaco: typeof Monaco) {
	monaco.languages.register({
		id: CADENCE_LANGUAGE_ID,
		extensions: ['.cdc'],
		aliases: ['CDC', 'cdc']
	});

	monaco.languages.setMonarchTokensProvider('cadence', {
		tokenizer: {
			root: [
				[
					/\b(?:AnyStruct|AnyResource|Void|Never|String|Character|Bool|Self|Int8|Int16|Int32|Int64|Int128|Int256|UInt8|UInt16|UInt32|UInt64|UInt128|UInt256|Word8|Word16|Word32|Word64|Word128|Word256|Fix64|UFix64)\b/,
					'keyword'
				],
				[
					/\b(?:if|else|return|continue|break|while|pre|post|prepare|execute|import|from|create|destroy|priv|pub|get|set|log|emit|event|init|struct|interface|fun|let|var|resource|access|all|contract|self|transaction)\b/,
					'keyword'
				],
				[/\b(?:true|false)\b/, 'constant.language'],
				[/(\d+(_+\d+)*)[eE]([\-+]?(\d+(_+\d+)*))?/, 'number.float'],
				[/(\d+(_+\d+)*)\.(\d+(_+\d+)*)([eE][\-+]?(\d+(_+\d+)*))?/, 'number.float'],
				[/0[xX]([[0-9a-fA-F]+(_+[0-9a-fA-F]+)*)/, 'number.hex'],
				[/0[oO]?([0-7]+(_+[0-7]+)*)/, 'number.octal'],
				[/0[bB]([0-1]+(_+[0-1]+)*)/, 'number.binary'],
				[/(\d+(_+\d+)*)/, 'number'],
				[/[()\[\]]/, '@brackets'],
				[/[<>](?![=><!~?:&|+\-*\/\^%]+)/, '@brackets'],
				[/"([^"\\]|\\.)*$/, 'string.invalid'],
				[/"/, 'string', '@string_double'],
				{ include: '@whitespace' },
				[/[a-z_$][\w$]*/, 'identifier'],
				[/[A-Z][\w]*/, 'type.identifier'],
				[/[;,.]/, 'delimiter']
			],
			whitespace: [
				[/[ \t\r\n]+/, ''],
				[/\/\*/, 'comment', '@comment'],
				[/\/\/.*$/, 'comment']
			],
			comment: [
				[/[^\/*]+/, 'comment'],
				[/\*\//, 'comment', '@pop'],
				[/[\/*]/, 'comment']
			],
			string_double: [
				[/\\(?:[abfnrtv\\"]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/, 'string.escape'],
				[/\\./, 'string.escape.invalid'],
				[/[^\\"]+/, 'string'],
				[/"/, 'string', '@pop']
			]
		}
	});

	monaco.languages.setLanguageConfiguration('cadence', {
		comments: {
			lineComment: '///',
			blockComment: ['/*', '*/']
		}
	});
}
