<script lang="ts">
	import '../../app.css';
	import 'remixicon/fonts/remixicon.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>SimQuiz</title>
	<meta name="description" content="A simple quiz app built with Svelte." />
	<meta name="keywords" content="svelte, quiz, app" />
	<meta name="author" content="Tonytomo" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="layout-start">
	{@render children()}
</div>
