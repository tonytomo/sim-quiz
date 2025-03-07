<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import theme from '$lib/themes/theme';
</script>

<Header isBack />

<main class={theme.container.block + ' text-center'}>
	<h1 class={theme.text.title}>About</h1>
	<h2 class={theme.text.subtitle}>Upload a quiz file with questions and answers to get started.</h2>
</main>
