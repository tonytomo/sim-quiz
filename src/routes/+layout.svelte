<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.getRegistration();
		registration?.addEventListener('updatefound', () => {
			const newWorker = registration.installing;
			newWorker?.addEventListener('statechange', () => {
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

	onMount(() => {
		detectSWUpdate();
	});
</script>

{@render children()}
