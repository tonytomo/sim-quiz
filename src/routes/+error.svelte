<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Button from '$lib/components/button.svelte';
</script>

<main>
	<section>
		<h1>Mohon maaf,</h1>
		{#if page.status === 404}
			<h2>Halaman yang kamu cari tidak ditemukan.</h2>
		{:else if page.status === 500}
			<h2>Terjadi kesalahan pada server. Silakan coba lagi nanti.</h2>
		{:else}
			<h2>Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.</h2>
		{/if}

		{#if page.error}
			<p class="error-box">{page.error.message}</p>
		{/if}

		<Button href="/" label="Kembali ke Beranda" variant="neutral" />
	</section>
</main>

<style>
	.error-box {
		background-color: var(--text-dark);
		color: var(--error-text);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-top: 2rem;
	}
</style>
