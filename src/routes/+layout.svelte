<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.webp';
	import SlideTransition from '$lib/components/transitions/slide.svelte';

	export let data;

	async function detectNewVersion() {
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

	onMount(() => {
		detectNewVersion();
	});
</script>

<header>
	<img src={logo} alt="SimQuiz Logo" class="logo" />
</header>

{#key data.path}
	<SlideTransition>
		<slot />
	</SlideTransition>
{/key}

<style>
	header {
		padding: 0.75rem 2rem;
		border-bottom: 1px solid var(--border);
	}

	.logo {
		width: 42px;
		height: auto;
	}

	@media (min-width: 600px) {
		header {
			padding: 1.25rem 4rem;
		}

		.logo {
			width: 56px;
		}
	}
</style>
