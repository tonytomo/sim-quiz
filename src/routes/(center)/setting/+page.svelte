<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import quiz, { resetQuiz } from '$lib/stores/quiz-store';
	import { convertBytes } from '$lib/utils/converter';
	import { parseQuizQuestions, parseQuizSettings } from '$lib/utils/parser';
	import { Step } from '$lib/types/quiz-step';
	import type { Question } from '$lib/types/quiz-question';
	import { decryptContent, encryptContent, importKey } from '$lib/utils/encryption';
	import { base } from '$app/paths';

	let ref: HTMLInputElement | null = null;
	let isLoading = true;
	let isLocked = true;
	let totalQuestions = 0;
	let questions: Question[] = [];
	let error = '';

	onMount(() => {
		if ($quiz.step > Step.ready) {
			resetQuiz();
			goto(base + '/');
			return;
		}
		if ($quiz.file) {
			isLoading = false;
			isLocked = $quiz.file.filename.split('.').pop() === 'enc';
			if (!isLocked) prepareQuiz($quiz.file.content as string);
		} else {
			isLoading = false;
			goto(base + '/');
		}
	});

	function prepareQuiz(content: string) {
		if (isLocked) return;

		$quiz.setting = parseQuizSettings(content);
		$quiz.question = parseQuizQuestions(content);

		if (isNaN($quiz.setting.maxQuestions) || isNaN($quiz.setting.timePerQuestion)) {
			error = 'Invalid quiz settings. Please upload a valid quiz file.';
			isLocked = true;
		}

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
			if (file.type !== 'application/json') {
				alert('Invalid file format. Please upload a .json key file.');
				return;
			}
			if (file.size > 1024 * 1024) {
				alert('File size exceeds 1MB. Please upload a smaller file.');
				return;
			}
			const reader = new FileReader();
			reader.onload = async function () {
				const content = reader.result as string;
				const key = JSON.parse(content);
				const quizKey = await importKey(key);
				const decryptedText = await decryptContent(quizKey, $quiz.file?.content as ArrayBuffer);

				if (!decryptedText) {
					isLocked = true;
					error = 'Wrong key. Upload the correct key to unlock the quiz.';
					return;
				}

				error = '';
				isLocked = false;
				prepareQuiz(decryptedText);
			};
			reader.readAsText(file);
		}
	}

	function handleReady() {
		$quiz.step = Step.ready;
		goto(base + '/');
	}
</script>

<Header isHome />

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
				{#if error}
					<p class="timer-red text-center">{error}</p>
				{/if}
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
		<button aria-label="Back" class="box btn btn-slate" on:click={() => window.history.back()}>
			<i class="ri-arrow-go-back-line"></i>
		</button>
		{#if isLocked}
			<input type="file" accept=".json" hidden bind:this={ref} on:change={handleChangeFile} />
			<button aria-label="Upload Key" class="box btn btn-yellow" on:click={handleClick}>
				<i class="ri-key-line"></i>
			</button>
		{:else}
			<button aria-label="Continue" class="box btn btn-green" on:click={handleReady}>
				<i class="ri-check-line"></i>
			</button>
		{/if}
	</footer>
{/if}
