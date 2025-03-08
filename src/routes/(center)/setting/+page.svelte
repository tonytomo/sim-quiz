<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import quiz, { resetQuiz } from '$lib/stores/quiz-store';
	import { convertBytes } from '$lib/utils/converter';
	import { parseQuizQuestions, parseQuizSettings } from '$lib/utils/parser';
	import { Step } from '$lib/types/quiz-step';
	import type { Question } from '$lib/types/quiz-question';

	let ref: HTMLInputElement | null = null;
	let isLoading = true;
	let isLocked = true;
	let totalQuestions = 0;
	let questions: Question[] = [];

	onMount(() => {
		if ($quiz.step > Step.ready) {
			resetQuiz();
			goto('/');
			return;
		}
		if ($quiz.file) {
			isLoading = false;
			isLocked = $quiz.file.content.includes('Locked');
			prepareQuiz($quiz.file.content);
		} else {
			isLoading = false;
			goto('/');
		}
	});

	function prepareQuiz(content: string) {
		if (isLocked) return;

		$quiz.setting = parseQuizSettings(content);
		$quiz.question = parseQuizQuestions(content);

		questions = $quiz.question.lists;
		if ($quiz.setting.isRandom) questions.sort(() => Math.random() - 0.5);

		totalQuestions = Math.min($quiz.setting.maxQuestions, questions.length);
	}

	function handleClick() {
		if (ref) ref.click();
	}

	function handleChangeFile() {
		const file = ref?.files?.[0];
		if (file) {
			if (file.type !== 'text/plain') {
				alert('Invalid file format. Please upload a .txt file.');
				return;
			}
			if (file.size > 1024) {
				alert('File size exceeds 1kB. Please upload a smaller file.');
				return;
			}
			const reader = new FileReader();
			reader.onload = function () {
				const content = reader.result as string;
				isLocked = false;
				console.log(content);

				/**
				@import { decrypt } from '$lib/utils/encryptor';

				const encryptedText = $quiz.file.content;
				const decryptedText = decrypt(encryptedText, content);

				prepareQuiz(decryptedText.substring(6));
				*/
			};
			reader.readAsText(file);
		}
	}

	function handleReady() {
		$quiz.step = Step.ready;
		goto('/');
	}
</script>

<Header />

{#if isLoading}
	<main class="container-center">
		<i class="ri-quill-pen-line animate-ping text-4xl"></i>
	</main>
{:else}
	<main class="container-stack gap-2">
		{#if $quiz.file}
			<h3 class="subtitle">
				File: {$quiz.file.filename + ' | ' + convertBytes($quiz.file.size)}
			</h3>
			<h3 class="subtitle">
				Status: {isLocked ? 'Locked' : 'Unlocked'}
			</h3>
			<section class="container-center">
				{#if !isLocked && $quiz.setting && $quiz.question}
					<ul class="container-color text-sm">
						<li>Question: {totalQuestions}</li>
						<li>Time: {$quiz.setting.timePerQuestion * totalQuestions}s</li>
						<li>Review: {$quiz.setting.canGoBack ? 'Yes' : 'No'}</li>
						<li>Random: {$quiz.setting.isRandom ? 'Yes' : 'No'}</li>
					</ul>
				{/if}
			</section>
			{#if !isLocked}
				<h3 class="subtitle">Ready?</h3>
			{/if}
		{/if}
	</main>

	<footer class="container-bottom justify-end gap-2">
		<button aria-label="Back" class="box base btn-slate" on:click={() => window.history.back()}>
			<i class="ri-arrow-go-back-line"></i>
		</button>
		{#if isLocked}
			<input type="file" accept=".txt" hidden bind:this={ref} on:change={handleChangeFile} />
			<button aria-label="Upload Key" class="box base btn-yellow" on:click={handleClick}>
				<i class="ri-key-line"></i>
			</button>
		{:else}
			<button aria-label="Continue" class="box base btn-green" on:click={handleReady}>
				<i class="ri-check-line"></i>
			</button>
		{/if}
	</footer>
{/if}
