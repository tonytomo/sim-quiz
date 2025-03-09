<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import quiz, { resetQuiz } from '$lib/stores/quiz-store';
	import type { Question } from '$lib/types/quiz-question';
	import { Step } from '$lib/types/quiz-step';
	import { calculateResult } from '$lib/utils/calculator';
	import { formatTime } from '$lib/utils/formater';

	let ref: HTMLInputElement | null = null;
	let refText = -1;
	let questionIndex = 0;
	let isLoading = true;
	let canGoBack = false;
	let totalQuestions = 0;
	let questions: Question[] = [];
	let userAnswers: string[] = [];
	let timer = 0;
	let interval = 0;

	onMount(() => {
		if ($quiz.step === Step.done) {
			isLoading = false;
			if ($quiz.question) questions = $quiz.question.lists;
			if ($quiz.result) userAnswers = $quiz.result.answers;
			if ($quiz.setting) canGoBack = $quiz.setting.canGoBack;

			totalQuestions = questions.length;
		} else if ($quiz.step === Step.start) {
			isLoading = false;
			if ($quiz.question) questions = $quiz.question.lists;
			totalQuestions = questions.length;

			if ($quiz.setting) {
				timer = $quiz.setting.timePerQuestion * totalQuestions;
				canGoBack = $quiz.setting.canGoBack;
			}
			startTimer();
		} else {
			resetQuiz();
			goto('/');
		}
	});

	$: {
		const active = document.querySelector('.active');
		if (active) active.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		if ($quiz.question) refText = $quiz.question.lists[questionIndex].refIndex;
	}

	function handleChooseAnswer(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		userAnswers[questionIndex] = value;
	}

	function startTimer() {
		interval = setInterval(() => {
			timer--;
			if (timer < 1) {
				handleResult();
			}
		}, 1000);
	}

	function handleResult() {
		if (!$quiz.setting || !$quiz.question) return;

		clearInterval(interval);
		isLoading = true;
		$quiz.step = Step.done;
		$quiz.result = calculateResult($quiz.setting, $quiz.question, userAnswers, timer);
		goto('/result');
	}

	function handleReset() {
		resetQuiz();
		goto('/');
	}

	window.onbeforeunload = () => {
		if ($quiz.step === 3) return 'Are you sure you want to leave?';
	};
</script>

{#if isLoading}
	<Header isDisabled />
	<main class="container-center h-[100svh]">
		<i class="ri-quill-pen-line animate-ping text-4xl"></i>
	</main>
{:else if $quiz.question === null}
	<Header />
	<main class="container-stack">
		<p class="text-sm">No questions found. Please go back and try again.</p>
		<button aria-label="Go Back" type="button" class="box btn btn-slate" on:click={handleReset}>
			<i class="ri-home-fill"></i>
		</button>
	</main>
{:else}
	{#if canGoBack}
		<header class="container-flex-row overflow-x-auto pb-0">
			<section class="flex w-min gap-2">
				{#each questions as question, index}
					<button class="box btn" on:click={() => (questionIndex = index)}>
						{#if questionIndex === index}
							<div class="box active">
								{index + 1}
							</div>
						{:else if $quiz.step === 4 && userAnswers[index] !== questions[index].answer}
							<div class="box wrong">
								{index + 1}
							</div>
						{:else if userAnswers[index]}
							<div class="box correct">
								{index + 1}
							</div>
						{:else}
							<div class="box inactive">
								{index + 1}
							</div>
						{/if}
					</button>
				{/each}
			</section>
		</header>
	{/if}
	<main class="container-block">
		{#if $quiz.step === 3}
			<section class="mb-4 flex justify-between">
				<p class="text-sm font-bold">{questionIndex + 1}/{totalQuestions}</p>
				<p class={timer <= 30 ? 'timer-red' : 'timer-gray'}>
					{#if timer <= 30}
						<i class="ri-timer-fill animate-pulse"></i>
					{/if}
					Time left: {formatTime(timer)}
				</p>
			</section>
		{/if}
		<section class="container-flex gap-8">
			<div class="flex-1">
				{#each $quiz.question.refs[refText].paragraphs as paragraph}
					<p class="paragraph">
						{paragraph}
					</p>
				{/each}
			</div>
			<div class="flex-1">
				<p class="text-sm font-bold">
					{questions[questionIndex].question}
				</p>
				<section class="flex flex-col gap-2 py-4">
					{#each questions[questionIndex].options as option}
						<label class="ip-radio">
							<input
								type="radio"
								name="option"
								value={option}
								disabled={$quiz.step === 4}
								hidden
								checked={userAnswers[questionIndex] === option}
								bind:this={ref}
								on:change={handleChooseAnswer}
							/>
							<div class="radio-circle">
								{#if $quiz.step === 4 && option === questions[questionIndex].answer}
									<i class="ri-circle-line radio-icon text-green-600"></i>
								{/if}
								{#if userAnswers[questionIndex] === option}
									<i class="ri-close-large-line radio-icon"></i>
								{/if}
							</div>
							<span class="max-w-[40ch] text-sm">{option}</span>
						</label>
					{/each}
				</section>
			</div>
		</section>
	</main>

	<footer class="container-flex gap-4 p-4">
		{#if $quiz.step === 4}
			<div class="container-color flex-1 text-left">
				<p class="mb-2 text-sm font-bold">
					<i class="ri-lightbulb-fill text-yellow-500"></i>
					Explanation:
				</p>
				{#each questions[questionIndex].explanation as explanation}
					<p class="text-sm">{explanation}</p>
				{/each}
			</div>
		{/if}
		<div class="flex flex-1 justify-end gap-2">
			{#if $quiz.setting?.canGoBack}
				<button
					type="button"
					aria-label="Previous question"
					disabled={questionIndex === 0}
					class="box btn btn-blue"
					on:click={() => {
						if (questionIndex > 0) questionIndex -= 1;
					}}
				>
					<i class="ri-arrow-left-s-fill"></i>
				</button>
			{/if}
			<button
				type="button"
				aria-label="Next question"
				class="box btn btn-blue"
				disabled={questionIndex === totalQuestions - 1 ||
					(!$quiz.setting?.canGoBack && !userAnswers[questionIndex])}
				on:click={() => {
					if (questionIndex < totalQuestions - 1) questionIndex += 1;
				}}
			>
				<i class="ri-arrow-right-s-fill"></i>
			</button>
			{#if $quiz.setting?.canGoBack}
				<button
					type="button"
					aria-label="Submit answer"
					disabled={$quiz.step === 3 && questionIndex < totalQuestions - 1}
					class="box btn btn-green"
					on:click={handleResult}
				>
					<i class="ri-check-fill"></i>
				</button>
			{:else}
				<button
					type="button"
					aria-label="Submit answer"
					disabled={($quiz.step === 3 && questionIndex < totalQuestions - 1) ||
						!userAnswers[questionIndex]}
					class="box btn btn-green"
					on:click={handleResult}
				>
					<i class="ri-check-fill"></i>
				</button>
			{/if}
		</div>
	</footer>
{/if}
