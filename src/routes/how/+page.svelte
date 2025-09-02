<script lang="ts">
	import MainFooter from '$lib/components/layout/footer/mainFooter.svelte';
	import MainHeader from '$lib/components/layout/header/mainHeader.svelte';
	import Meta from '$lib/components/layout/meta.svelte';
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { animateMarquee } from '$lib/utils/animation/marquee';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	onMount(animateMarquee);
</script>

<Meta
	title="SimQuiz: Cara Memulai Membuat Kuis Interaktif"
	description="Pelajari cara membuat kuis interaktif dengan SimQuiz. Ikuti panduan langkah demi langkah kami untuk memulai perjalanan pembuatan kuis Anda."
/>

<MainHeader />
<main>
	<Ornament pos="tl" size={60} />
	<Ornament pos="br" size={48} />

	<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4">
		<hgroup class="flex flex-col items-center text-center" in:fly={{ y: 20, duration: 400 }}>
			<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
				<div class="marquee effect-3d scrollbar-none">
					<p
						class="text-[12rem] font-black tracking-tighter text-gray-400 uppercase dark:text-gray-700"
					>
						{#each Array(4) as _, i}
							panduan<span class="text-gradient">soal</span>
						{/each}
					</p>
				</div>
			</div>
			<h1 class="px-4 text-xl font-medium md:text-2xl">SimQuiz: Mulai Membuat Kuismu</h1>
		</hgroup>

		<div class="mt-8 text-center" in:fly={{ y: 20, duration: 400, delay: 200 }}>
			<a href="#getting-started" title="Mulai Pelajari" class="btn btn-wide btn-lg btn-info">
				Mulai Pelajari
			</a>
		</div>
	</section>

	<section
		id="getting-started"
		class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4"
	></section>
</main>
<MainFooter />