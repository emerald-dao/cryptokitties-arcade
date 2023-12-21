import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const lesson = await import(
			`../../../../../../courses/content/${params.course}/${params.chapter}/${params.lesson}/content.md`
		);

		const lessonContent = lesson.default as ConstructorOfATypedSvelteComponent;

		return {
			lessonContent,
			lessonMetadata: lesson.metadata
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
};
