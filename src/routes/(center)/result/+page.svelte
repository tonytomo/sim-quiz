<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
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

<main class="container-stack gap-2">
	<h1 class="title">{score}%</h1>
	<p class="subtitle">Your Result</p>
	<div class="container-color">
		<p class="text-sm">Time Spent: {timeSpent} seconds</p>
		<p class="text-sm">Correct Answers: {corrects.length}</p>
		<p class="text-sm">Wrong Answers: {wrongs.length}</p>
		<p class="text-sm">Unanswered: {unanswered.length}</p>
		<p class="text-sm">Doubts: {doubts.length}</p>
	</div>
</main>

<footer class="container-bottom justify-end gap-2">
	{#if $quizStore.setting?.canGoBack}
		<button aria-label="Review Quiz" class="box btn btn-green" on:click={() => goto('/quiz')}>
			<i class="ri-search-line"></i>
		</button>
	{/if}
	<button aria-label="Retry Quiz" class="box btn btn-blue" on:click={handleRedoQuiz}>
		<i class="ri-reset-right-fill"></i>
	</button>
	<button aria-label="Home" class="box btn btn-slate" on:click={handleHome}>
		<i class="ri-home-fill"></i>
	</button>
</footer>
