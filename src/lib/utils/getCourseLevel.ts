export const getCourseLevel = (slug: string): string => {
	return slug.split('-')[0];
};
