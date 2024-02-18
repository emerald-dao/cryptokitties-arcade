import { serviceSupabase } from '$lib/server/supabaseClient.js';
import { error as err } from '@sveltejs/kit';

export async function GET({ params}) {
    const { userAddress, course,chapter,lesson } = params;
	const lessonSlug = course + '/' + chapter + '/' + lesson;
	const { data, error } = await serviceSupabase
		.from('users_lessons_finished')
		.select(`lesson_slug`)
		.eq('user_address', userAddress)
        .eq('lesson_slug', lessonSlug)

	if (error) {
		throw err(404, "Couldn't fetch user");
	}
	return new Response(JSON.stringify(data));
}