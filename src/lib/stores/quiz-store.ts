import type { QuizFile } from '$lib/types/quiz-file';
import type { QuizQuestion } from '$lib/types/quiz-question';
import type { QuizResult } from '$lib/types/quiz-result';
import type { QuizSetting } from '$lib/types/quiz-setting';
import { Step } from '$lib/types/quiz-step';
import { writable } from 'svelte/store';

const quiz = writable({
	step: Step.idle,
	file: null as QuizFile | null,
	setting: null as QuizSetting | null,
	question: null as QuizQuestion | null,
	result: null as QuizResult | null
});

export default quiz;

export function resetQuiz() {
	quiz.update((store) => {
		store.step = Step.idle;
		store.file = null;
		store.setting = null;
		store.question = null;
		store.result = null;
		return store;
	});
}
