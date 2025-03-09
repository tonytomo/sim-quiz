<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import quiz, { resetQuiz } from '$lib/stores/quiz-store';
	import { Step } from '$lib/types/quiz-step';
	import { base } from '$app/paths';

	const instruction = ['Upload a quiz file', 'Prepare the quiz', 'Start the quiz'];
	let countdown = 4;
	let refInput: HTMLInputElement | null = null;

	onMount(() => {
		if ($quiz.step > Step.ready) {
			resetQuiz();
			goto(base);
		}
	});

	function handleChooseFile() {
		if (refInput) refInput.click();
	}

	function handleChangeFile() {
		const file = refInput?.files?.[0];
		if (file) {
			if (file.type !== 'text/plain' && file.name.split('.').pop() !== 'enc') {
				alert('Invalid file format. Please upload a .txt or .enc file.');
				return;
			}
			if (file.size > 1024 * 1024) {
				alert('File size exceeds 1MB. Please upload a smaller file.');
				return;
			}
			const reader = new FileReader();
			if (file.name.split('.').pop() === 'enc') {
				reader.onload = function () {
					const content = reader.result as ArrayBuffer;
					resetQuiz();
					$quiz.step = Step.prepare;
					$quiz.file = {
						file,
						filename: file.name,
						size: file.size,
						content
					};
				};
				reader.readAsArrayBuffer(file);
			} else {
				reader.onload = function () {
					const content = reader.result as string;
					resetQuiz();
					$quiz.step = Step.prepare;
					$quiz.file = {
						file,
						filename: file.name,
						size: file.size,
						content
					};
				};
				reader.readAsText(file);
			}
		}
	}

	function handleStartQuiz() {
		countdown--;
		const interval = setInterval(() => {
			countdown--;
			if (countdown < 1) {
				$quiz.step = Step.start;
				goto(base + '/quiz');
				clearInterval(interval);
			}
		}, 1000);
	}
</script>

<Header isDisabled={countdown < 4} />

<main class="container-stack">
	<section class="container-hstack gap-2 text-slate-400">
		<input
			type="file"
			accept=".txt,.enc"
			hidden
			bind:this={refInput}
			on:change={handleChangeFile}
		/>
		<button
			disabled={countdown < 4}
			aria-label="Upload Quiz"
			class="box btn btn-blue"
			on:click={handleChooseFile}
		>
			<i class="ri-file-paper-2-fill"></i>
		</button>
		<i class="ri-arrow-right-s-line"></i>
		<button
			disabled={$quiz.step < Step.prepare || countdown < 4}
			aria-label="Settings"
			class="box btn btn-yellow"
			on:click={() => goto(base + '/setting')}
		>
			<i class="ri-equalizer-2-fill"></i>
		</button>
		<i class="ri-arrow-right-s-line"></i>
		<button
			disabled={$quiz.step < Step.ready || countdown < 4}
			aria-label="Start Quiz"
			class="box btn btn-green"
			on:click={handleStartQuiz}
		>
			{#if countdown < 4}
				{countdown}
			{:else}
				<i class="ri-timer-fill"></i>
			{/if}
		</button>
	</section>
	<p class="text-md">{instruction[$quiz.step]}</p>
</main>

<footer class="container-bottom flex-col items-end gap-2">
	<h3 class="subtitle">Contribute?</h3>
	<button
		disabled={countdown < 4}
		aria-label="Are you a Writer?"
		class="box btn btn-slate"
		on:click={() => goto(base + '/writer')}
	>
		<i class="ri-quill-pen-fill"></i>
	</button>
</footer>
