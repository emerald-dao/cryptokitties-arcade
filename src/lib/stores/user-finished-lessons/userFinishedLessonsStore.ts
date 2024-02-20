import { writable } from 'svelte/store';

export const userFinishedLessons = writable<string[]>([]);

export const addLessonFinishedSlug = (slug: string) => {
    userFinishedLessons.update(lessonSlugs => [...lessonSlugs, slug]);
};
