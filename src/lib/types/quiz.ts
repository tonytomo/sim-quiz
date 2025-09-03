export interface IQuiz {
	intro: IQuizIntro;
	setting: IQuizSettings;
	refs: IQuizRef[];
	questions: IQuizQuestion[];
	result: IQuizResult | null;
}

export interface IQuizIntro {
	title: string;
	instruction: string;
	example: string | null;
}

export interface IQuizSettings {
	numberOfQuestion: number;
	timePerQuestionInSecond: number;
	shuffleQuestion: boolean;
	oneWay: boolean;
}

export interface IQuizRef {
	id: string;
	label: string;
	paragraphs: string[];
}

export interface IQuizQuestion {
	id: string;
	refId: string | null;
	type: EQuestionType;
	question: string;
	options: string[];
	answer: string;
	point: number;
	difficulty: TDifficultyLevel;
	explanation: string[];
}

export enum EQuestionType {
	MultipleChoice = 'multiple-choice',
	ShortAnswer = 'short-answer'
}

export type TDifficultyLevel = 1 | 2 | 3 | 4 | 5;

export interface IQuizResult {
	score: number;
	answers: (string | undefined)[];
	corrects: number[];
	wrongs: number[];
	unanswered: number[];
	doubts: number[];
	timeLeftInSecond: number;
}
