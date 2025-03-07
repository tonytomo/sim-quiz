<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import theme from '$lib/themes/theme';
</script>

<Header />

<main class={theme.container.block + ' mt-8 text-center'}>
	<h1 class={theme.text.title}>Are you a writer?</h1>
	<h2 class={theme.text.subtitle}>Join our team and write quizzes to help others learn.</h2>
	<button
		aria-label="Back"
		class={theme.button.base + theme.button.orange}
		on:click={() => goto('/')}
	>
		<i class="ri-arrow-left-line"></i>
	</button>
</main>
