import type { QuizFile } from '$lib/types/quiz-file';
import type { QuizQuestion } from '$lib/types/quiz-question';
import type { QuizResult } from '$lib/types/quiz-result';
import type { QuizSetting } from '$lib/types/quiz-setting';
import { writable } from 'svelte/store';

const quizStore = writable({
	step: 0,
	file: null as QuizFile | null,
	setting: null as QuizSetting | null,
	question: null as QuizQuestion | null,
	result: null as QuizResult | null
});

export default quizStore;

export function resetQuiz() {
	quizStore.update((store) => {
		store.step = 0;
		store.file = null;
		store.setting = null;
		store.question = null;
		store.result = null;
		return store;
	});
}
