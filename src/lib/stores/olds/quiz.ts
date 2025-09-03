import type { IQuiz } from '$lib/types/quiz';
import { EStep } from '$lib/types/step';
import { writable } from 'svelte/store';

const quiz = writable<IQuiz>({
	step: EStep.idle
});

export default quiz;

export function resetQuiz() {
	quiz.set({
		step: EStep.idle
	});
}
