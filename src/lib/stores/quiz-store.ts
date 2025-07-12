import type { IQuiz } from '$lib/types/quiz';
import { EStep } from '$lib/types/step';
import { writable } from 'svelte/store';

/**
 * A Svelte store that holds the state of the quiz.
 * It includes the current step of the quiz and can be reset to its initial state.
 */
const quiz = writable<IQuiz>({
	step: EStep.idle
});

export default quiz;

/**
 * Resets the quiz store to its initial state.
 * This function sets the quiz step to idle, effectively clearing any previous state.
 */
export function resetQuiz() {
	quiz.set({
		step: EStep.idle
	});
}
