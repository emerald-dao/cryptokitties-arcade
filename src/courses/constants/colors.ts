export const COURSES_COLORS = {
	green: {
		background: 'bg-green-300',
		askForHelp: 'bg-green-100',
		checkAnswer: 'bg-green-600'
	}
};

export type CourseColor = keyof typeof COURSES_COLORS;
