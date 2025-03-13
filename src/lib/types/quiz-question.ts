export interface QuizQuestion {
	refs: Text[];
	lists: Question[];
}

export interface Text {
	paragraphs: string[];
	related: number;
}

export enum QuestionType {
	MultipleChoice = 'Multiple Choice',
	ShortAnswer = 'Short Answer'
}

export interface Question {
	refIndex: number;
	type: QuestionType;
	question: string;
	options: string[];
	answer: string;
	explanation: string[];
}
