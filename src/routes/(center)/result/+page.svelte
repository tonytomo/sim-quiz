<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';
	import type { QuizResult } from '$lib/types/quiz-result';

	const { score, timeSpent, corrects, wrongs, unanswered, doubts } =
		$quizStore.result as QuizResult;

	function handleHome() {
		resetQuiz();
		goto('/');
	}

	function handleRedoQuiz() {
		$quizStore.step = 3;
		goto('/quiz');
	}
</script>

<Header />

<main class={theme.container.block + ' text-center'}>
	<h1 class={theme.text.title}>{score}%</h1>
	<p class={theme.text.subtitle}>Your Result</p>
	<div class={theme.container.block + 'text-center'}>
		<p class={theme.text.small}>Time Spent: {timeSpent} seconds</p>
		<p class={theme.text.small}>Correct Answers: {corrects.length}</p>
		<p class={theme.text.small}>Wrong Answers: {wrongs.length}</p>
		<p class={theme.text.small}>Unanswered: {unanswered.length}</p>
		<p class={theme.text.small}>Doubts: {doubts.length}</p>
	</div>
</main>

<footer class={theme.container.bottom + 'flex-row justify-end p-4'}>
	{#if $quizStore.setting?.canGoBack}
		<button
			aria-label="Review Quiz"
			class={theme.button.base + theme.button.green}
			on:click={() => goto('/quiz')}
		>
			<i class="ri-search-line"></i>
		</button>
	{/if}
	<button
		aria-label="Retry Quiz"
		class={theme.button.base + theme.button.blue}
		on:click={handleRedoQuiz}
	>
		<i class="ri-reset-right-fill"></i>
	</button>
	<button aria-label="Home" class={theme.button.base + theme.button.orange} on:click={handleHome}>
		<i class="ri-home-fill"></i>
	</button>
</footer>
