<script lang="ts">
	import { goto } from '$app/navigation';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';
	import type { Question } from '$lib/types/quiz-question';
	import { onMount } from 'svelte';

	let refInput: HTMLInputElement | null = null;
	let refText = -1;
	let questionIndex = 0;
	let isLoading = true;
	let totalQuestions = 0;
	let questions: Question[] = [];
	let userAnswers: string[] = [];

	onMount(() => {
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
</script>

{#if isLoading}
	<main class={theme.container.block + ' mt-4 flex h-full items-center justify-center text-center'}>
		<div class="animate-ping text-4xl">
			<i class="ri-quill-pen-fill"></i>
		</div>
	</main>
{:else if $quizStore.question === null}
	<main class={theme.container.block + 'mt-4 text-center'}>
		<p class={theme.text.body}>No questions found. Please go back and try again.</p>
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
			on:click={() => goto('/result')}
		>
			<i class="ri-check-fill"></i>
		</button>
	</footer>
{/if}
