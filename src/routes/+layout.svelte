<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.webp';
	import SlideTransition from '$lib/components/transitions/slide.svelte';
	import profile from '$lib/stores/profile';

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
	{#if $profile.name}
		<p class="username">Halo, <b>{$profile.name}!</b></p>
	{:else}
		<p class="username">Halo, <b>teman!</b></p>
	{/if}
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
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		width: 42px;
		height: auto;
	}

	p.username {
		font-size: 1.2rem;
		color: var(--text);
		margin: 0;
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
