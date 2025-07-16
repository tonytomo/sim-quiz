import type { IProfile } from '$lib/types/profile';
import { writable } from 'svelte/store';

const profile = writable<IProfile>({
	name: ''
});

export default profile;

export function resetProfile() {
	profile.set({
		name: ''
	});
}
