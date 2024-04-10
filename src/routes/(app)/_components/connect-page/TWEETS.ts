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
		text: 'I am a tweet',
		user: {
			name: 'John Doe',
			username: 'johndoe',
			avatar: 'https://i.pravatar.cc/100',
			description: 'I am a description'
		}
	},
	{
		id: '2',
		text: 'I am another',
		user: {
			name: 'Jane Doe',
			username: 'janedoe',
			avatar: 'https://i.pravatar.cc/100',
			description: 'I am a description'
		}
	}
];

export default TWEETS;
