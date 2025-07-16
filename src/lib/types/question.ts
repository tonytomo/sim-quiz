export interface IQuestions {
	refs: IRef[];
	lists: IQuestion[];
}

export interface IRef {
	paragraphs: string[];
	related: number;
}

export enum EType {
	MultipleChoice = 'Multiple Choice',
	ShortAnswer = 'Short Answer'
}

export interface IQuestion {
	refIndex: number;
	type: EType;
	question: string;
	options: string[];
	answer: string;
	explanation: string[];
}
