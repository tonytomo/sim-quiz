import type { IQuiz } from '$lib/types/quiz';
import { writable } from 'svelte/store';

export const quizStore = writable<IQuiz | null>(null);
