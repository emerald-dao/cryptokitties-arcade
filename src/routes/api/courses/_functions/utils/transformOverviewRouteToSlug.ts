export const transformOverviewRouteToSlug = (route: string) => {
	return route
		.replace('/overview.ts', '')
		.replaceAll('../', '')
		.replace('courses/content/', '')
		.replace('/tabs', '')
		.replace('/src/', '');
};
