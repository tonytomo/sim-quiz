/**
 * Interface representing a collection of quiz questions and references.
 * It includes an array of references and a list of questions.
 *
 * @property {IRef[]} refs - An array of references, each containing paragraphs and related question index.
 * @property {IQuestion[]} lists - An array of questions, each with a reference index, type, question text, options, answer, and explanation.
 */
export interface IQuestions {
	refs: IRef[];
	lists: IQuestion[];
}

/**
 * Interface representing a reference used in the quiz application.
 * It includes an array of paragraphs and an index of related questions.
 *
 * @property {string[]} paragraphs - An array of paragraphs related to the reference.
 * @property {number} related - The index of the question related to this reference.
 */
export interface IRef {
	paragraphs: string[];
	related: number;
}

/**
 * Enum representing the types of questions available in the quiz application.
 * It includes 'Multiple Choice' and 'Short Answer' as possible question types.
 */
export enum EType {
	MultipleChoice = 'Multiple Choice',
	ShortAnswer = 'Short Answer'
}

/**
 * Interface representing a question in the quiz application.
 * It includes a reference index, type, question text, options, answer, and explanation.
 */
export interface IQuestion {
	refIndex: number;
	type: EType;
	question: string;
	options: string[];
	answer: string;
	explanation: string[];
}
