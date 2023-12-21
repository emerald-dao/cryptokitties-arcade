import type { ChapterOverviewWithLessons } from '$courses/types/chapter-overview.interface.js';

export async function load({ fetch, params }) {
	const res = await fetch(`/api/courses/${params.course}/chapters/${params.chapter}`);
	const chapter: ChapterOverviewWithLessons = await res.json();

	return {
		chapter
	};
}
