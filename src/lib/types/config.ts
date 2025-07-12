/**
 * Interface representing the configuration settings for a quiz.
 * It includes the maximum number of questions, time allowed per question,
 * whether the user can go back to previous questions, and whether the questions are presented in random order.
 */
export interface IConfig {
	maxQuestions: number;
	timePerQuestion: number;
	canGoBack: boolean;
	isRandom: boolean;
}
