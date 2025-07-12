import type { QuizQuestion } from '$lib/types/question';
import type { QuizResult } from '$lib/types/result';
import type { QuizSetting } from '$lib/types/config';

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

		if (answers[index].toLowerCase() === question.answer.toLowerCase()) {
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
