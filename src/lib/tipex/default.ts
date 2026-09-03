import StarterKit from '@tiptap/starter-kit';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { Placeholder } from '@tiptap/extensions';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { TaskList, TaskItem } from '@tiptap/extension-list';
import { Underline } from '@tiptap/extension-underline';
import { lowlight } from 'lowlight';

export const defaultExtensions = [
	// codeBlock is disabled because CodeBlockLowlight below replaces it
	StarterKit.configure({
		codeBlock: false,
		link: false,
		underline: false
	}),
	Link.configure({
		openOnClick: false,
		HTMLAttributes: {
			target: '_blank',
			rel: 'noopener noreferrer'
		}
	}),
	Image.configure({
		allowBase64: true
	}),
	Placeholder.configure({
		showOnlyWhenEditable: false
	}),
	CodeBlockLowlight.configure({
		lowlight,
		languageClassPrefix: 'language-',
		defaultLanguage: 'plaintext'
	}),
	Underline,
	TaskList,
	TaskItem.configure({
		nested: true
	})
];
