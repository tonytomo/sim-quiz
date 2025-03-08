import type { QuizQuestion } from '$lib/types/quiz-question';
import type { QuizResult } from '$lib/types/quiz-result';
import type { QuizSetting } from '$lib/types/quiz-setting';

export function calculateResult(
	settings: QuizSetting,
	questions: QuizQuestion,
	answers: string[],
	timeLeft: number
): QuizResult {
	let score = 0;
	const corrects: number[] = [];
	const wrongs: number[] = [];
	const unanswered: number[] = [];
	const doubts: number[] = [];
	const timeSpent = settings.maxQuestions * settings.timePerQuestion - timeLeft;

	questions.lists.forEach((question, index) => {
		if (answers[index] === undefined) {
			unanswered.push(index);
			return;
		}

		if (answers[index] === question.answer) {
			corrects.push(index);
		} else {
			wrongs.push(index);
		}
	});

	score = (corrects.length / settings.maxQuestions) * 100;

	return {
		score,
		answers,
		corrects,
		wrongs,
		unanswered,
		doubts,
		timeSpent
	};
}
