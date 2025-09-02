<script lang="ts">
	import DropZone from '$lib/components/feature/home/dropZone.svelte';
	import Hero from '$lib/components/feature/home/hero.svelte';
	import Why from '$lib/components/feature/home/why.svelte';
	import MainFooter from '$lib/components/layout/footer/mainFooter.svelte';
	import MainHeader from '$lib/components/layout/header/mainHeader.svelte';
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { animateMarquee } from '$lib/utils/animation/marquee';
	import { onMount } from 'svelte';

	onMount(animateMarquee);
</script>

<MainHeader />
<DropZone />
<main>
	<Ornament size={36} />
	<Ornament pos="bl" size={28} />

	<Hero />
	<Why />

	<section class="mx-auto grid min-h-screen max-w-6xl place-items-center px-4">
		<div class="card text-center">
			<h2 class="text-gradient mb-4 text-4xl font-black">Buat Kuismu Sendiri</h2>
			<p class="mb-12 text-gray-700 dark:text-gray-300">
				Mudah pakainya, cepat hasilnya, dan bisa langsung dibagikan ke teman-temanmu.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/make" class="btn btn-secondary btn-lg"> Mulai Sekarang </a>
				<a href="/about" class="btn btn-info btn-lg"> Pelajari Lebih Lanjut </a>
			</div>
		</div>
	</section>
</main>
<MainFooter />
