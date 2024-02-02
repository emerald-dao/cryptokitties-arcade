import type { LessonTabType } from '$courses/constants/lessonTabTypes';

export type TabContent = CodeTabContent | ConstructorOfATypedSvelteComponent;

export type CodeTabContent = {
	startingCode: string;
	solutionCode: string;
};

interface ITabContentWithType {
	type: LessonTabType;
	content: TabContent;
}

interface CodeTabContentWithType extends ITabContentWithType {
	type: 'code';
	content: CodeTabContent;
}

interface ComponentTabContentWithType extends ITabContentWithType {
	type: 'component';
	content: ConstructorOfATypedSvelteComponent;
}

export type TabContentWithType = CodeTabContentWithType | ComponentTabContentWithType;
