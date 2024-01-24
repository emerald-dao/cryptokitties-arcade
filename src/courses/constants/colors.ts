export const COURSES_COLORS = {
	green: {
		background: 'bg-green-200',
		askForHelp: 'bg-green-100',
		checkAnswer: 'bg-green-600'
	},
	purple: {
		background: 'bg-purple-200',
		askForHelp: 'bg-purple-100',
		checkAnswer: 'bg-purple-600'
	},
	yellow: {
		background: 'bg-yellow-200',
		askForHelp: 'bg-yellow-100',
		checkAnswer: 'bg-yellow-600'
	},
	pink: {
		background: 'bg-pink-200',
		askForHelp: 'bg-pink-100',
		checkAnswer: 'bg-pink-600'
	}
};

export type CourseColor = keyof typeof COURSES_COLORS;
