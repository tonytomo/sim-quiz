<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center text-center">
	<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
		<div class="marquee effect-3d scrollbar-none">
			<h2 class="flex text-[12rem] font-black tracking-tighter text-gray-700 uppercase">
				{#each Array(4) as _, i}
					kenapa<span class="text-gradient">simquiz?</span>
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
