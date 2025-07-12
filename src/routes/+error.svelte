<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Header from '$lib/components/header.svelte';
</script>

<Header mode="reset" />

<main class="container-stack h-[100svh] gap-4">
	<h1 class="title">Oops!</h1>
	{#if page.status === 404}
		<h3 class="text-sm">The page you are looking for does not exist.</h3>
	{:else if page.status === 500}
		<h3 class="text-sm">An error occurred on the server. Please try again later.</h3>
	{:else}
		<h3 class="text-sm">An error occurred. Please try again later.</h3>
	{/if}

	{#if page.error}
		<section class="container-color gap-2 text-center">
			<i class="ri-error-warning-fill"></i>
			<p class="text-sm">{page.error.message}</p>
		</section>
	{/if}
</main>
