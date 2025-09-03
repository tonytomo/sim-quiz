import {
	EQuestionType,
	type IQuizIntro,
	type IQuizQuestion,
	type IQuizRef,
	type IQuizSettings
} from '$lib/types/quiz';

export const DEFAULT_QUIZ_INTRO: IQuizIntro = {
	title: '',
	instruction: '',
	example: ''
};

export const DEFAULT_QUIZ_SETTINGS: IQuizSettings = {
	numberOfQuestion: 10,
	timePerQuestionInSecond: 10,
	shuffleQuestion: false,
	oneWay: false
};

export const DEFAULT_QUIZ_REF: IQuizRef = {
	id: '',
	label: '',
	paragraphs: []
};

export const DEFAULT_QUIZ_QUESTION: IQuizQuestion = {
	id: '',
	refId: null,
	type: EQuestionType.MultipleChoice,
	question: '',
	options: [],
	answer: '',
	point: 1,
	difficulty: 1,
	explanation: ['']
};
