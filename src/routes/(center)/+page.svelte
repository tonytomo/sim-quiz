<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import quizStore, { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';

	let countdown = 4;
	let refInput: HTMLInputElement | null = null;
	const instruction = ['Upload a quiz file', 'Set the quiz', 'Start the quiz'];

	function handleChooseFile() {
		if (refInput) refInput.click();
	}

	function handleChangeFile() {
		const file = refInput?.files?.[0];
		if (file) {
			if (file.type !== 'text/plain') {
				alert('Invalid file format. Please upload a .txt file.');
				return;
			}
			if (file.size > 1024 * 1024) {
				alert('File size exceeds 1MB. Please upload a smaller file.');
				return;
			}
			const reader = new FileReader();
			reader.onload = function () {
				const content = reader.result as string;

				resetQuiz();

				$quizStore.step = 1;
				$quizStore.file = {
					file: file,
					filename: file.name,
					size: file.size,
					content: content
				};
			};
			reader.readAsText(file);
		}
	}

	function handleStartQuiz() {
		if (countdown > 1) {
			countdown--;
			setTimeout(handleStartQuiz, 1000);
		} else {
			countdown--;
			$quizStore.step = 3;
			goto('/quiz');
		}
	}
</script>

<Header />

<main class={theme.container.block + ' text-center'}>
	<section class={theme.container.flex + ' mt-12 text-stone-500'}>
		<input type="file" accept=".txt" hidden bind:this={refInput} on:change={handleChangeFile} />
		<button
			aria-label="Upload Quiz"
			class={theme.button.base + theme.button.blue}
			on:click={handleChooseFile}
		>
			<i class={'ri-file-paper-2-fill' + ($quizStore.step === 0 ? ' animate-pulse' : '')}></i>
		</button>
		<i class="ri-arrow-right-s-fill"></i>
		<button
			disabled={$quizStore.step < 1}
			aria-label="Settings"
			class={theme.button.base + theme.button.orange}
			on:click={() => goto('/setting')}
		>
			<i class={'ri-equalizer-2-fill' + ($quizStore.step === 1 ? ' animate-pulse' : '')}></i>
		</button>
		<i class="ri-arrow-right-s-fill"></i>
		<button
			disabled={$quizStore.step < 2 || countdown < 4}
			aria-label="Start Quiz"
			class={theme.button.base +
				theme.button.green +
				(countdown === 0 ? 'scale-[500%] duration-200' : '')}
			on:click={handleStartQuiz}
		>
			{#if countdown < 4}
				{countdown}
			{:else}
				<i class={'ri-timer-fill' + ($quizStore.step === 2 ? ' animate-pulse' : '')}></i>
			{/if}
		</button>
	</section>
	<p class={theme.text.small + ' mt-4 text-stone-500'}>{instruction[$quizStore.step]}</p>
</main>

<footer class={theme.container.bottom + ' p-4 text-center'}>
	<h3 class={theme.text.subtitle}>Want to contribute?</h3>
	<button
		aria-label="Are you a Writer?"
		class={theme.button.base + theme.button.black + ' mt-2'}
		on:click={() => goto('/writer')}
	>
		<i class="ri-quill-pen-fill"></i>
	</button>
</footer>
