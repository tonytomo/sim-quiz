import { browser } from '$app/environment';

export async function detectVersion() {
	if (!browser || !('serviceWorker' in navigator)) return;
	const registration = await navigator.serviceWorker.getRegistration();
	if (!registration) return;

	registration.addEventListener('updatefound', () => {
		const newWorker = registration.installing;

		if (!newWorker) return;

		newWorker.addEventListener('statechange', () => {
			if (newWorker.state === 'installed') {
				const update = confirm('A new version is available. Do you want to update?');

				if (update) {
					newWorker.postMessage({ type: 'SKIP_WAITING' });
					location.reload();
				}
			}
		});
	});
}
