<script lang="ts">
	import Ornament from '$lib/components/layout/ornament.svelte';
</script>

<Ornament size={36} parallaxSpeed={0.2} />
<Ornament pos="bl" size={32} parallaxSpeed={0.4} />
<Ornament pos="br" size={28} parallaxSpeed={0.3} />

<figure class="fixed top-8 right-8 grid size-20 place-items-center">
	<a href="/"> <img src="/favicon.png" alt="SimQuiz Logo" class="size-16" /> </a>
</figure>

<main>
	<section class="container mx-auto flex min-h-screen flex-col justify-center px-4 text-center">
		<hgroup class="flex flex-col items-center gap-4 text-center">
			<h1 class="text-gradient text-5xl font-black tracking-tighter">SimQuiz</h1>
			<p class="text-2xl font-medium">Platform Kuis untuk Simulasi dan Membuat Kuis</p>
		</hgroup>

		<div class="mt-12">
			<a href="/start" class="btn btn-wide btn-lg btn-primary">Mulai</a>
		</div>
	</section>
</main>
