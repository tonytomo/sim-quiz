<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { resetQuiz } from '$lib/stores/quiz-store';

	interface HeaderProps {
		mode: 'back' | 'home' | 'reset' | 'about';
		isDisabled?: boolean;
	}

	let { mode = 'about', isDisabled }: HeaderProps = $props();

	function handleReset() {
		resetQuiz();
		goto(base + '/');
	}
</script>

<header class="container-top justify-between">
	<figure class="logo">
		SimQuiz<span class="logo animate-pulse">.</span>
	</figure>
	{#if mode === 'back'}
		<button
			disabled={isDisabled}
			aria-label="Back"
			class="box btn btn-ghost"
			onclick={() => window.history.back()}
		>
			Back
		</button>
	{:else if mode === 'home'}
		<button
			disabled={isDisabled}
			aria-label="Go Home"
			class="box btn btn-ghost"
			onclick={() => goto(base + '/')}
		>
			Home
		</button>
	{:else if mode === 'reset'}
		<button
			disabled={isDisabled}
			aria-label="Reset"
			class="box btn btn-ghost"
			onclick={handleReset}
		>
			Reset
		</button>
	{:else}
		<button
			disabled={isDisabled}
			aria-label="About"
			class="box btn btn-ghost"
			onclick={() => goto(base + '/about')}
		>
			About
		</button>
	{/if}
</header>
