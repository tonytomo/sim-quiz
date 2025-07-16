import type { IProfile } from '$lib/types/profile';
import { writable } from 'svelte/store';

const profile = writable<IProfile>({
	name: '',
	level: 'Silver',
	experience: 88,
	quizzesTaken: 431,
	quizzesCreated: 12
});

export default profile;

export function resetProfile() {
	profile.set({
		name: '',
		level: 'Silver',
		experience: 88,
		quizzesTaken: 431,
		quizzesCreated: 12
	});
}
