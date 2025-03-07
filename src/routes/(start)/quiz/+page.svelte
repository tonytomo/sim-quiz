<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';
	import type { Question } from '$lib/types/quiz-question';
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
		if ($quizStore.step !== 3) {
			resetQuiz();
			goto('/');
		} else {
			isLoading = false;
			if ($quizStore.question && $quizStore.setting) {
				if ($quizStore.setting.isRandom) {
					questions = $quizStore.question.lists.sort(() => Math.random() - 0.5);
				} else {
					questions = $quizStore.question.lists;
				}
				totalQuestions = questions.length;
				timer = $quizStore.setting.timePerQuestion * totalQuestions;
				startTimer();
			}
		}
	});

	$: {
		if ($quizStore.step === 3 && $quizStore.question) {
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
		$quizStore.step = 4;
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
		<header class={theme.container.block + 'overflow-x-auto'}>
			<section class={theme.container.number + 'w-min'}>
				{#each questions as question, index}
					<button class={theme.container.box} on:click={() => (questionIndex = index)}>
						{#if questionIndex === index}
							<div class={theme.icon.box + 'bg-blue-400 dark:bg-blue-900'}>
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
		<section class="flex justify-end">
			<p class={timer <= 30 ? theme.text.timerRed : theme.text.timer}>
				{#if timer <= 30}
					<i class="ri-timer-fill animate-pulse"></i>
				{/if}
				Time left: {formatTime(timer)}
			</p>
		</section>
		{#each $quizStore.question.refs[refText].paragraphs as paragraph}
			<p class={theme.text.paragraph}>
				{paragraph}
			</p>
		{/each}
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
						hidden
						checked={userAnswers[questionIndex] === option}
						bind:this={refInput}
						on:change={handleChooseAnswer}
					/>
					<div
						class="mr-2 flex h-4 w-4 items-center justify-center rounded-full border border-stone-300 text-2xl dark:border-stone-600"
					>
						{#if userAnswers[questionIndex] === option}
							<i class="ri-close-large-line text-3xl"></i>
						{/if}
					</div>
					<span>{option}</span>
				</label>
			{/each}
		</section>
	</main>

	<footer class={theme.container.block + 'flex justify-end p-4 text-center'}>
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
		<button
			type="button"
			aria-label="Submit answer"
			disabled={questionIndex < totalQuestions - 1}
			class={theme.button.base + theme.button.green}
			on:click={handleResult}
		>
			<i class="ri-check-fill"></i>
		</button>
	</footer>
{/if}
