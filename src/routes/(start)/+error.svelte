<script lang="ts">
	import { goto } from '$app/navigation';
	import theme from '$lib/themes/theme';
</script>

<header class={theme.container.top + 'px-4'}>
	<figure class={theme.text.logo}>
		SimQuiz<span class={theme.text.logo + 'animate-pulse'}>.</span>
	</figure>
	<button aria-label="Back" class={theme.button.ghost} on:click={() => window.history.back()}>
		<i class="ri-arrow-go-back-line"></i>
	</button>
</header>

<main class={theme.container.block + ' text-center'}>
	<h1 class={theme.text.title}>Error</h1>
	<h2 class={theme.text.subtitle}>This page does not exist.</h2>
</main>
