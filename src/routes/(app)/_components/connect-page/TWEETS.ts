export interface Tweet {
	id: string;
	text: string;
	user: {
		name: string;
		username: string;
		avatar: string;
		description: string;
	};
}

const TWEETS: Tweet[] = [
	{
		id: '1',
		text: 'Cadence is the most composable & developer friendly smart contract language.',
		user: {
			name: 'Jacob Tucker',
			username: 'jacobmtucker',
			avatar: '/images/avatars/jacob-avatar.jpg',
			description: 'Founder of Emerald City'
		}
	},
	{
		id: '2',
		text: 'Go with the Flow',
		user: {
			name: 'Roham',
			username: 'roham',
			avatar: '/images/avatars/roham-avatar.jpeg',
			description: 'CEO of Dapper Labs'
		}
	}
];

export default TWEETS;
