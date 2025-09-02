<script lang="ts">
	import { browser } from '$app/environment';
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { onMount } from 'svelte';

	let onDragOver = false;

	onMount(() => {
		const marquees = document.querySelectorAll<HTMLElement>('.marquee');
		if (marquees.length === 0) return;
		for (const marquee of marquees) {
			let scrollAmount = 0;
			const speed = 2;

			const animate = () => {
				scrollAmount += speed;
				if (scrollAmount >= marquee.scrollWidth / 2) {
					scrollAmount = 0;
				}
				marquee.scrollTo(scrollAmount, 0);
				requestAnimationFrame(animate);
			};

			animate();
		}
	});

	onMount(() => {
		const dropZone = document.getElementById('drop-zone');
		if (!dropZone) return;

		dropZone.addEventListener('dragover', (e) => {
			e.preventDefault();
			onDragOver = true;
		});

		dropZone.addEventListener('dragleave', () => {
			onDragOver = false;
		});

		dropZone.addEventListener('drop', (e) => {
			e.preventDefault();
			onDragOver = false;

			const files = e.dataTransfer?.files;
			if (files && files.length > 0) {
				// Handle the dropped files here
				console.log(files);
			}
		});
	});
</script>

<Ornament size={36} parallaxSpeed={0.2} />
<Ornament pos="bl" size={28} rotate={45} parallaxSpeed={0.1} />

<figure class="fixed top-0 left-0 z-30 p-4">
	<a href="/"> <img src="/favicon.png" alt="SimQuiz Logo" class="size-12 md:size-16" /> </a>
</figure>

<div class="fixed top-0 right-0 z-30 p-4 md:p-6">
	<a href="/make" class="btn btn-sm btn-secondary">Buat Kuis</a>
</div>

<div
	id="drop-zone"
	class="fixed inset-0 grid place-items-center {onDragOver
		? 'z-50 bg-white/50 backdrop-blur-md'
		: 'z-0'}"
>
	{#if onDragOver}
		<div class="p-8 text-center text-gray-900">
			<p class="text-2xl font-black">Letakkan file di sini</p>
			<p class="mt-2">Mendukung format: .txt, .squiz</p>
		</div>
	{/if}
</div>

<main>
	<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center text-center">
		<hgroup class="flex flex-col items-center text-center">
			<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
				<div class="marquee effect-3d scrollbar-none">
					<h1 class="text-[12rem] font-black tracking-tighter text-gray-700 uppercase">
						{#each Array(4) as _, i}
							sim<span class="text-gray-400">quiz</span>
						{/each}
					</h1>
				</div>
			</div>
			<p class="px-4 text-2xl font-medium">Platform Kuis untuk Simulasi dan Membuat Kuis</p>
		</hgroup>

		<div class="mt-8">
			<a href="/start" class="btn btn-wide btn-lg btn-primary">Mulai</a>
			<p class="pt-4 text-sm text-gray-600 dark:text-gray-400">atau letakkan file di sini</p>
		</div>
	</section>

	<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center text-center">
		<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
			<div class="marquee effect-3d scrollbar-none">
				<h2 class="flex text-[12rem] font-black tracking-tighter text-gray-700 uppercase">
					{#each Array(4) as _, i}
						kenapa<span class="text-gray-400">simquiz?</span>
					{/each}
				</h2>
			</div>
		</div>
		<div class="grid gap-8 px-4 md:grid-cols-3">
			<article class="card">
				<h3 class="mb-4 text-xl font-semibold">Mudah Digunakan</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Antarmuka yang intuitif memungkinkanmu membuat dan mengikuti kuis dengan mudah.
				</p>
			</article>
			<article class="card">
				<h3 class="mb-4 text-xl font-semibold">Kustomisasi Kuis</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Buat kuis sesuai keinginanmu dengan berbagai jenis pertanyaan dan opsi penyesuaian.
				</p>
			</article>
			<article class="card">
				<h3 class="mb-4 text-xl font-semibold">Bagikan dengan Mudah</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Bagikan kuismu dengan teman dan keluarga melalui tautan sederhana.
				</p>
			</article>
		</div>
	</section>
</main>

<footer class="pt-16 pb-4 text-center text-sm text-gray-600 dark:text-gray-400">
	<p>&copy; {new Date().getFullYear()} SimQuiz</p>
</footer>
