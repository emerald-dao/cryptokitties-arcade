import { COURSES_COLORS } from '../../../../../../courses/constants/colors';
export interface FeaturedKitty {
	name: string;
	image: string;
	description: string;
	color: keyof typeof COURSES_COLORS;
}

export const FEATURED_KITTIES: FeaturedKitty[] = [
	{
		name: 'Vegetation Kitty',
		image: '/images/cats/vegetation-cat.png',
		description: 'This kitty loves to eat plants and flowers.',
		color: 'green'
	},
	{
		name: 'Medieval Kitty',
		image: '/images/cats/medieval-cat.png',
		description: 'This kitty loves to dress up in medieval clothing.',
		color: 'pink'
	},
	{
		name: 'Sailor Kitty',
		image: '/images/cats/sailor-cat.png',
		description: 'This kitty loves to sail the seven seas.',
		color: 'purple'
	},
	{
		name: 'Fire Kitty',
		image: '/images/cats/fire-cat.png',
		description: 'This kitty loves to play with fire.',
		color: 'yellow'
	}
];
