/**
 * Interface representing the result of a quiz.
 * It includes the score, answers, correct answers, wrong answers, unanswered questions, doubts, and time spent.
 */
export interface IResult {
	score: number;
	answers: string[];
	corrects: number[];
	wrongs: number[];
	unanswered: number[];
	doubts: number[];
	timeSpent: number;
}
