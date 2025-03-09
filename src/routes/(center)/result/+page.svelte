<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import { base } from '$app/paths';

	let score = 0;
	let timeSpent = 0;
	let corrects: number[] = [];
	let wrongs: number[] = [];
	let unanswered: number[] = [];
	let doubts: number[] = [];

	onMount(() => {
		if ($quizStore.result) {
			score = $quizStore.result.score || 0;
			timeSpent = $quizStore.result.timeSpent || 0;
			corrects = $quizStore.result.corrects || [];
			wrongs = $quizStore.result.wrongs || [];
			unanswered = $quizStore.result.unanswered || [];
			doubts = $quizStore.result.doubts || [];
		}
	});

	function handleHome() {
		resetQuiz();
		goto(base);
	}

	function handleRedoQuiz() {
		$quizStore.step = 3;
		goto(base + '/quiz');
	}
</script>

<Header />

<main class="container-stack gap-2">
	<h1 class="big-title">{score}%</h1>
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
		<button aria-label="Review Quiz" class="box btn btn-green" on:click={() => goto(base + '/quiz')}>
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
