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
	},
	{
		id: '3',
		text: 'Fun fact - @NBATopShot & @NFLALLDAY are both built with Cadence, the coding language of @flow_blockchain',
		user: {
			name: 'Luke',
			username: 'ElDumboTS',
			avatar: '/images/avatars/el-dumbo-avatar.jpg',
			description: 'Community Lead at Flow'
		}
	},
	{
		id: '4',
		text: `Cadence is easier to write and audit. And with far fewer bugs when handling the critical aspects of smart contracts: ownership and access control. CryptoKitties: Arcade! is a great way to try yourself.`,
		user: {
			name: 'Dieter Shirley',
			username: 'dete73',
			avatar: '/images/avatars/dieter-shirley-avatar.png',
			description: 'Creator of CryptoKitties & ERC-721'
		}
	},
	{
		id: '5',
		text: 'The first step to understand @flow_blockchain is to understand Cadence, the contract programming language of Flow. Is powerful and will be interoperable with Solidity soon',
		user: {
			name: 'Navid TehraniFar',
			username: 'navid_te',
			avatar: '/images/avatars/navid-tehraniFar-avatar.jpg',
			description: 'Software Engineer at Flow'
		}
	},
	{
		id: '6',
		text: `Every Solidity dev has played CryptoZombies - it's fun & addicting. Now there's a similar platform on Flow for Cadence!`,
		user: {
			name: 'Giovanni Sanchez',
			username: 'gio_incognito',
			avatar: '/images/avatars/giovanni-sanchez-avatar.jpg',
			description: 'Smart Contract Engineer building at Flow'
		}
	}
];

export default TWEETS;
