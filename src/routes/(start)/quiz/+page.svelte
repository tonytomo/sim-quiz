<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';
	import type { Question } from '$lib/types/quiz-question';
	import { calculateResult } from '$lib/utils/calculator';
	import { formatTime } from '$lib/utils/formater';
	import { onMount } from 'svelte';

	let refInput: HTMLInputElement | null = null;
	let refText = -1;
	let questionIndex = 0;
	let isLoading = true;
	let totalQuestions = 0;
	let questions: Question[] = [];
	let userAnswers: string[] = [];
	let timer: number = 0;

	onMount(() => {
		timer = 0;
		if ($quizStore.step === 4) {
			isLoading = false;
			if ($quizStore.question && $quizStore.setting && $quizStore.result) {
				questions = $quizStore.question.lists;
				totalQuestions = questions.length;
				userAnswers = $quizStore.result.answers;
			}
		} else if ($quizStore.step === 3) {
			isLoading = false;
			if ($quizStore.question && $quizStore.setting) {
				questions = $quizStore.question.lists;
				totalQuestions = questions.length;
				timer = $quizStore.setting.timePerQuestion * totalQuestions;
				startTimer();
			}
		} else {
			resetQuiz();
			goto('/');
		}
	});

	$: {
		if ($quizStore.question && $quizStore.step) {
			refText = $quizStore.question.lists[questionIndex].refIndex;

			const activeQuestion = document.querySelector('.bg-blue-400');
			if (activeQuestion && questionIndex)
				activeQuestion.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		}
	}

	function handleChooseAnswer(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		userAnswers[questionIndex] = value;
	}

	function startTimer() {
		if (timer > 0 && $quizStore.step === 3) {
			timer -= 1;
			setTimeout(startTimer, 1000);
		} else {
			handleResult();
		}
	}

	function handleResult() {
		if (!$quizStore.setting || !$quizStore.question) return;

		$quizStore.step = 4;
		$quizStore.result = calculateResult(
			$quizStore.setting,
			$quizStore.question,
			userAnswers,
			timer
		);
		goto('/result');
	}

	function handleReset() {
		resetQuiz();
		goto('/');
	}

	window.onbeforeunload = () => {
		if ($quizStore.step === 3) return 'Are you sure you want to leave?';
	};
</script>

{#if isLoading}
	<main
		class={theme.container.block + ' mt-4 flex h-[100svh] items-center justify-center text-center'}
	>
		<div class="animate-ping text-4xl">
			<i class="ri-quill-pen-fill"></i>
		</div>
	</main>
{:else if $quizStore.question === null}
	<Header />
	<main
		class={theme.container.block +
			'mt-4 flex h-[100svh] flex-col items-center justify-center gap-4 text-center'}
	>
		<p class={theme.text.body}>No questions found. Please go back and try again.</p>
		<button
			aria-label="Go Back"
			type="button"
			class={theme.button.base + theme.button.black}
			on:click={handleReset}
		>
			<i class="ri-home-fill"></i>
		</button>
	</main>
{:else}
	{#if $quizStore.setting?.canGoBack}
		<header class={theme.container.block + 'overflow-x-auto md:py-2'}>
			<section class={theme.container.number + 'w-min'}>
				{#each questions as question, index}
					<button class={theme.container.box} on:click={() => (questionIndex = index)}>
						{#if questionIndex === index}
							<div class={theme.icon.box + 'bg-blue-400 dark:bg-blue-900'}>
								{index + 1}
							</div>
						{:else if $quizStore.step === 4 && userAnswers[index] && userAnswers[index] !== questions[index].answer}
							<div class={theme.icon.box + 'bg-red-400 dark:bg-red-900'}>
								{index + 1}
							</div>
						{:else if userAnswers[index]}
							<div class={theme.icon.box + 'bg-green-400 dark:bg-green-900'}>
								{index + 1}
							</div>
						{:else}
							<div class={theme.icon.box + 'bg-gray-300 dark:bg-zinc-900'}>
								{index + 1}
							</div>
						{/if}
					</button>
				{/each}
			</section>
		</header>
	{/if}
	<main class={theme.container.block}>
		{#if $quizStore.step === 3}
			<section class="flex justify-between">
				<p class={theme.text.bold}>{questionIndex + 1}/{totalQuestions}</p>
				<p class={timer <= 30 ? theme.text.timerRed : theme.text.timer}>
					{#if timer <= 30}
						<i class="ri-timer-fill animate-pulse"></i>
					{/if}
					Time left: {formatTime(timer)}
				</p>
			</section>
		{/if}
		<section class="flex flex-col items-stretch gap-4 md:flex-row">
			<div class="flex-1">
				{#each $quizStore.question.refs[refText].paragraphs as paragraph}
					<p class={theme.text.paragraph}>
						{paragraph}
					</p>
				{/each}
			</div>
			<div class="flex-1">
				<p class={theme.text.bold + 'pt-4'}>
					{questions[questionIndex].question}
				</p>
				<section class={theme.container.answer}>
					{#each questions[questionIndex].options as option}
						<label class={theme.text.small + theme.input.radio}>
							<input
								type="radio"
								name="option"
								value={option}
								disabled={$quizStore.step === 4}
								hidden
								checked={userAnswers[questionIndex] === option}
								bind:this={refInput}
								on:change={handleChooseAnswer}
							/>
							<div
								class="relative mr-2 h-4 w-4 rounded-full border border-stone-300 text-2xl dark:border-stone-600"
							>
								{#if $quizStore.step === 4 && option === questions[questionIndex].answer}
									<i class="ri-circle-line absolute top-[-75%] left-[-60%] text-3xl text-green-600"
									></i>
								{/if}
								{#if userAnswers[questionIndex] === option}
									<i class="ri-close-large-line absolute top-[-75%] left-[-60%] text-3xl"></i>
								{/if}
							</div>
							<span>{option}</span>
						</label>
					{/each}
				</section>
			</div>
		</section>
	</main>

	<footer
		class={theme.container.block +
			'flex flex-col justify-between gap-4 p-4 text-center md:flex-row'}
	>
		{#if $quizStore.step === 4}
			<div class="flex-1 text-left">
				<p class={theme.text.bold}>
					<i class="ri-lightbulb-fill text-yellow-500"></i>
					Explanation:
				</p>
				{#each questions[questionIndex].explanation as explanation}
					<p class={theme.text.small}>
						{explanation}
					</p>
				{/each}
			</div>
		{/if}
		<div class="flex-1">
			{#if $quizStore.setting?.canGoBack}
				<button
					type="button"
					aria-label="Previous question"
					disabled={questionIndex === 0}
					class={theme.button.base + theme.button.blue}
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
				class={theme.button.base + theme.button.blue}
				disabled={questionIndex === totalQuestions - 1 ||
					(!$quizStore.setting?.canGoBack && !userAnswers[questionIndex])}
				on:click={() => {
					if (questionIndex < totalQuestions - 1) questionIndex += 1;
				}}
			>
				<i class="ri-arrow-right-s-fill"></i>
			</button>
			{#if $quizStore.setting?.canGoBack}
				<button
					type="button"
					aria-label="Submit answer"
					disabled={$quizStore.step === 3 && questionIndex < totalQuestions - 1}
					class={theme.button.base + theme.button.green}
					on:click={handleResult}
				>
					<i class="ri-check-fill"></i>
				</button>
			{:else}
				<button
					type="button"
					aria-label="Submit answer"
					disabled={($quizStore.step === 3 && questionIndex < totalQuestions - 1) ||
						!userAnswers[questionIndex]}
					class={theme.button.base + theme.button.green}
					on:click={handleResult}
				>
					<i class="ri-check-fill"></i>
				</button>
			{/if}
		</div>
	</footer>
{/if}
