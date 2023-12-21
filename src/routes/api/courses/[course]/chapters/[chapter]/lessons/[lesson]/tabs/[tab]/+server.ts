import { json, error } from '@sveltejs/kit';
import { getTabOverview } from '../../../../../../../_functions/get/getOverview.js';

export const GET = async ({ params }) => {
	try {
		const tabOverview = await getTabOverview(
			params.course,
			params.chapter,
			params.lesson,
			params.tab
		);

		return json(tabOverview);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
