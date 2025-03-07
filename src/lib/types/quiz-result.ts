export interface QuizResult {
	score: number;
	corrects: number[];
	wrongs: number[];
	unanswered: number[];
    doubts: number[];
	timeSpent: number;
}
