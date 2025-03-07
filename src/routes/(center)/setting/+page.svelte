<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import quizStore from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';
	import { convertBytes } from '$lib/utils/converter';
	import { parseQuizQuestions, parseQuizSettings } from '$lib/utils/parser';
	import { onMount } from 'svelte';

	let refInput: HTMLInputElement | null = null;
	let isLoading = true;
	let isLocked = true;

	onMount(() => {
		if ($quizStore.file) {
			isLoading = false;
			isLocked = $quizStore.file.content.includes('Locked');
			if (!isLocked) {
				$quizStore.setting = parseQuizSettings($quizStore.file.content);
				$quizStore.question = parseQuizQuestions($quizStore.file.content);
			}
		} else {
			goto('/');
		}
	});

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
			if (file.size > 1024) {
				alert('File size exceeds 1kB. Please upload a smaller file.');
				return;
			}
			const reader = new FileReader();
			reader.onload = function () {
				const content = reader.result as string;
				isLocked = false;
				console.log(content.split(',')[0].trim());
			};
			reader.readAsText(file);
		}
	}

	function handleContinue() {
		$quizStore.step = 2;
		goto('/');
	}
</script>

<Header />

{#if isLoading}
	<main class={theme.container.block + ' mt-4 text-center'}>
		<div class="animate-ping text-4xl">
			<i class="ri-quill-pen-line"></i>
		</div>
	</main>
{:else}
	<main class={theme.container.block + ' mt-4 text-center'}>
		{#if $quizStore.file}
			<section class={theme.container.block + ' text-stone-500'}>
				<h3 class={theme.text.small}>
					File: {$quizStore.file.filename + ' | ' + convertBytes($quizStore.file.size)}
				</h3>
				<h3 class={theme.text.small}>
					Lock: {isLocked ? 'Locked' : 'Unlocked'}
				</h3>
				{#if !isLocked && $quizStore.setting && $quizStore.question}
					<ul class={theme.container.block + 'text-white'}>
						<li class={theme.text.small}>
							Total Question: {Math.min(
								$quizStore.setting.maxQuestions,
								$quizStore.question.lists.length
							)}
						</li>
						<li class={theme.text.small}>
							Time Per Question: {$quizStore.setting.timePerQuestion}s
						</li>
						<li class={theme.text.small}>
							Can Go Back: {$quizStore.setting.canGoBack ? 'Yes' : 'No'}
						</li>
						<li class={theme.text.small}>
							Is Random: {$quizStore.setting.isRandom ? 'Yes' : 'No'}
						</li>
					</ul>
				{/if}
				{#if !isLocked}
					<h3 class={theme.text.subtitle}>Ready to Start?</h3>
				{/if}
			</section>
		{/if}
	</main>

	<footer class={theme.container.bottom + ' flex-row justify-end p-4 text-center'}>
		<button
			aria-label="Back"
			class={theme.button.base + theme.button.black}
			on:click={() => window.history.back()}
		>
			<i class="ri-arrow-go-back-line"></i>
		</button>
		{#if isLocked}
			<input type="file" accept=".txt" hidden bind:this={refInput} on:change={handleChangeFile} />
			<button
				aria-label="Upload Key"
				class={theme.button.base + theme.button.orange}
				on:click={handleChooseFile}
			>
				<i class="ri-key-line"></i>
			</button>
		{:else}
			<button
				aria-label="Continue"
				class={theme.button.base + theme.button.green}
				on:click={handleContinue}
			>
				<i class="ri-check-line"></i>
			</button>
		{/if}
	</footer>
{/if}
