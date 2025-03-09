<script lang="ts">
	import { onMount } from 'svelte';
	import '../../app.css';
	import 'remixicon/fonts/remixicon.css';
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

<svelte:head>
	<title>SimQuiz</title>
	<meta name="description" content="A simple quiz app built with Svelte." />
	<meta name="keywords" content="svelte, quiz, app" />
	<meta name="author" content="Tonytomo" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="layout-start">
	{@render children()}
</div>
