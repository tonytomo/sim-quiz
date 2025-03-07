<script lang="ts">
	import { goto } from '$app/navigation';
	import questions from '$lib/dummies/question';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';
	import { onMount } from 'svelte';

	let questionIndex = 0;
	let isLoading = true;

	onMount(() => {
		if ($quizStore.step !== 3) {
			resetQuiz();
			goto('/');
		} else isLoading = false;
	});

	$: {
		if ($quizStore.step === 3) {
			const activeQuestion = document.querySelector('.bg-blue-400');
			if (activeQuestion && questionIndex)
				activeQuestion.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		}
	}
</script>

{#if isLoading}
	<main class={theme.container.block + ' mt-4 text-center'}>
		<div class="animate-ping text-4xl">
			<i class="ri-quill-pen-line"></i>
		</div>
	</main>
{:else}
	<header class={theme.container.top + 'overflow-x-auto'}>
		<section class={theme.container.number + 'w-min'}>
			{#each questions as question, index}
				<button class={theme.container.box} on:click={() => (questionIndex = index)}>
					<div
						class={theme.icon.box +
							(questionIndex === index
								? 'bg-blue-400 dark:bg-blue-700'
								: 'bg-gray-200 dark:bg-zinc-700')}
					>
						{index + 1}
					</div>
				</button>
			{/each}
		</section>
	</header>

	<main class={theme.container.block}>
		<p class={theme.text.body}>
			{questions[questionIndex].question}
		</p>
		<section class={theme.container.answer}>
			{#each questions[questionIndex].answers as answer}
				<label class={theme.text.body + theme.input.radio}>
					<input type="radio" name="answer" value={answer} />
					<span>{answer}</span>
				</label>
			{/each}
		</section>
	</main>

	<footer class={theme.container.bottom + 'flex-row justify-end p-4 text-center'}>
		<button
			type="button"
			aria-label="Previous question"
			disabled={questionIndex === 0}
			class={theme.button.base + theme.button.blue}
			on:click={() => {
				if (questionIndex > 0) questionIndex -= 1;
			}}
		>
			<i class="ri-arrow-left-s-line"></i>
		</button>
		<button
			type="button"
			aria-label="Next question"
			class={theme.button.base + theme.button.blue}
			disabled={questionIndex === questions.length - 1}
			on:click={() => {
				if (questionIndex < questions.length - 1) questionIndex += 1;
			}}
		>
			<i class="ri-arrow-right-s-line"></i>
		</button>
		<button
			type="button"
			aria-label="Submit answer"
			disabled={questionIndex < questions.length - 1}
			class={theme.button.base + theme.button.green}
			on:click={() => goto('/result')}
		>
			<i class="ri-check-line"></i>
		</button>
	</footer>
{/if}
