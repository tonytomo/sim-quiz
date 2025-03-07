<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resetQuiz } from '$lib/stores/quiz-store';
	import theme from '$lib/themes/theme';

	function handleReset() {
		resetQuiz();
		goto('/');
	}
</script>

<header class={theme.container.top + 'px-4'}>
	<figure class={theme.text.logo}>
		SimQuiz<span class={theme.text.logo + 'animate-pulse'}>.</span>
	</figure>
	<button aria-label="Go Home" class={theme.button.ghost} on:click={handleReset}>
		<i class="ri-home-fill"></i>
	</button>
</header>

<main
	class={theme.container.block +
		' flex h-[100svh] flex-col items-center justify-center text-center'}
>
	<h1 class={theme.text.title}>Oops!</h1>

	{#if page.status === 404}
		<h3 class={theme.text.small + 'mt-4'}>The page you are looking for does not exist.</h3>
	{:else if page.status === 500}
		<h3 class={theme.text.small + 'mt-4'}>
			The quiz is not loaded properly. Please go back and try again.
		</h3>
	{:else}
		<h3 class={theme.text.small + 'mt-4'}>An error occurred. Please try again later.</h3>
	{/if}

	{#if page.error}
		<section class={theme.container.flex + 'mt-4'}>
			<div class="rounded-md border border-gray-300 px-3 py-1 dark:border-stone-700">
				<i class="ri-error-warning-fill"></i>
				<p class={theme.text.small}>{page.error.message}</p>
			</div>
		</section>
	{/if}
</main>
