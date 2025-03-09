<script lang="ts">
	import { goto } from '$app/navigation';
	import { resetQuiz } from '$lib/stores/quiz-store';

	let {
		isBack,
		isHome,
		isReset,
		isDisabled
	}: { isBack?: boolean; isHome?: boolean; isReset?: boolean; isDisabled?: boolean } = $props();

	function handleReset() {
		resetQuiz();
		goto('/');
	}
</script>

<header class="container-top justify-between">
	<figure class="logo">
		SimQuiz<span class="logo animate-pulse">.</span>
	</figure>
	{#if isBack}
		<button
			disabled={isDisabled}
			aria-label="Back"
			class="box btn btn-ghost"
			onclick={() => window.history.back()}
		>
			<i class="ri-arrow-go-back-line"></i>
		</button>
	{:else if isHome}
		<button
			disabled={isDisabled}
			aria-label="Go Home"
			class="box btn btn-ghost"
			onclick={() => goto('/')}
		>
			<i class="ri-home-fill"></i>
		</button>
	{:else if isReset}
		<button
			disabled={isDisabled}
			aria-label="Reset"
			class="box btn btn-ghost"
			onclick={handleReset}
		>
			<i class="ri-refresh-fill"></i>
		</button>
	{:else}
		<button
			disabled={isDisabled}
			aria-label="About"
			class="box btn btn-ghost"
			onclick={() => goto('/about')}
		>
			<i class="ri-information-line"></i>
		</button>
	{/if}
</header>
