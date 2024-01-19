export const getLevel = (slug: string): string => {
	return slug.split('-')[0];
};
