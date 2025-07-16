export interface IResult {
	score: number;
	answers: string[];
	corrects: number[];
	wrongs: number[];
	unanswered: number[];
	doubts: number[];
	timeSpent: number;
}
