<script lang="ts">
	import Ornament from '$lib/components/layout/ornament.svelte';
</script>

<Ornament size={36} parallaxSpeed={0.2} />
<Ornament pos="bl" size={28} rotate={45} parallaxSpeed={0.1} />

<figure class="fixed top-0 left-0 z-30 p-4">
	<a href="/"> <img src="/favicon.png" alt="SimQuiz Logo" class="size-16" /> </a>
</figure>

<main>
	<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center text-center">
		<hgroup class="flex flex-col items-center text-center">
			<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch">
				<div class="scrollbar-none flex w-full items-center gap-4 overflow-x-auto">
					<h1 class="text-[12rem] font-black tracking-tighter text-gray-700 uppercase">
						{#each Array(4) as _, i}
							sim<span class="text-gray-400">quiz</span>
						{/each}
					</h1>
				</div>
			</div>
			<p class="px-4 text-2xl font-medium">Platform Kuis untuk Simulasi dan Membuat Kuis</p>
		</hgroup>

		<div class="mt-16">
			<a href="/start" class="btn btn-wide btn-lg btn-primary">Mulai</a>
		</div>
	</section>

	<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 text-center">
		<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch">
			<div class="scrollbar-none flex w-full items-center gap-4 overflow-x-auto">
				<h2 class="flex text-[12rem] font-black tracking-tighter text-gray-700 uppercase">
					{#each Array(4) as _, i}
						kenapa<span class="text-gray-400">simquiz?</span>
					{/each}
				</h2>
			</div>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
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
