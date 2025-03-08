export interface QuizResult {
	score: number;
	answers: string[];
	corrects: number[];
	wrongs: number[];
	unanswered: number[];
    doubts: number[];
	timeSpent: number;
}
