<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center text-center">
	<hgroup class="flex flex-col items-center text-center">
		<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
			<div class="marquee effect-3d scrollbar-none">
				<p class="text-[12rem] font-black tracking-tighter text-gray-700 uppercase">
					{#each Array(4) as _, i}
						sim<span class="text-gray-400">quiz</span>
					{/each}
				</p>
			</div>
		</div>
		<h1 class="px-4 text-xl font-medium md:text-2xl">
			SimQuiz: Platform Kuis untuk Simulasi dan Membuat Kuis
		</h1>
	</hgroup>

	<div class="mt-8">
		<a href="/start" title="Mulai Kuis" class="btn btn-wide btn-lg btn-primary">Mulai</a>
		<p class="pt-4 text-sm text-gray-600 dark:text-gray-400">atau letakkan file di sini</p>
	</div>
</section>
