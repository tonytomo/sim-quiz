<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';

	function handleHome() {
		resetQuiz();
		goto('/');
	}
</script>

<Header />

<main class={theme.container.block + ' text-center'}>
	<h1 class={theme.text.title}>Result</h1>
	<section class="mt-4">
		<p class={theme.text.small}>You scored 3 out of 5</p>
	</section>
	<section class="mt-4">
		<p class={theme.text.small}>You answered 5 questions</p>
		<p class={theme.text.small}>You answered 3 questions correctly</p>
		<p class={theme.text.small}>You answered 2 questions incorrectly</p>
	</section>
</main>

<footer class={theme.container.bottom + 'flex-row justify-end p-4'}>
	<button
		aria-label="Retry Quiz"
		class={theme.button.base + theme.button.blue}
		on:click={() => goto('/quiz')}
	>
		<i class="ri-reset-right-line"></i>
	</button>
	<button aria-label="Home" class={theme.button.base + theme.button.orange} on:click={handleHome}>
		<i class="ri-home-line"></i>
	</button>
</footer>
