<script lang="ts">
	import { page } from '$app/state';
	import Meta from '$lib/components/layout/meta.svelte';
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loading = true;

	onMount(() => (loading = false));
</script>

<Meta
	title="Terjadi Kesalahan - SimQuiz"
	description="Maaf, terjadi kesalahan pada halaman yang Anda minta. Silakan coba lagi atau kembali ke beranda."
/>

<main>
	<Ornament pos="tl" size={48} />
	<Ornament pos="br" size={32} />

	<section class="mx-auto flex h-screen max-w-6xl flex-col items-center justify-center">
		{#if !loading}
			<div
				class="card flex flex-col items-center text-center"
				in:fly={{ y: 20, duration: 500, delay: 200 }}
			>
				<h1 class="font-black">Mohon maaf,</h1>
				{#if page.status === 404}
					<h2>Halaman yang kamu cari tidak ditemukan.</h2>
				{:else if page.status === 500}
					<h2>Terjadi kesalahan pada server. Silakan coba lagi nanti.</h2>
				{:else}
					<h2>Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.</h2>
				{/if}

				{#if page.error}
					<p class="card my-8 bg-black/50 font-mono">
						<span class="font-bold text-red-500">Error Details:</span>
						{page.error.message}
					</p>
				{/if}

				<a href="/" title="Kembali ke Beranda" class="btn btn-accent"> Kembali ke Beranda </a>
			</div>
		{/if}
	</section>
</main>
