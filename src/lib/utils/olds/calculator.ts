import type { IConfig } from '$lib/types/olds/config';
import type { IQuestions } from '$lib/types/olds/question';
import type { IResult } from '$lib/types/olds/result';

export function calculateResult(
	settings: IConfig,
	questions: IQuestions,
	answers: string[],
	timeLeft: number
): IResult {
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
