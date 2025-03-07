export interface QuizQuestion {
	refs: Text[];
	lists: Question[];
}

export interface Text {
	paragraphs: string[];
	related: number;
}

export interface Question {
	refIndex: number;
	question: string;
	options: string[];
	answer: string;
	explanation: string[];
}
