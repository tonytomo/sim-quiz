<script lang="ts">
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { animateMarquee } from '$lib/utils/animation/marquee';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	onMount(animateMarquee);
</script>

<main class="h-screen overflow-y-auto scroll-smooth">
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
							cara<span class="text-gradient">cepat</span>
						{/each}
					</p>
				</div>
			</div>
			<h1 class="px-4 text-xl font-medium md:text-2xl">SimQuiz: Cara Mulai Membuat Kuismu</h1>
		</hgroup>

		<div class="mt-8 text-center" in:fly={{ y: 20, duration: 400, delay: 200 }}>
			<a href="#getting-started" title="Mulai Pelajari" class="btn btn-wide btn-lg btn-primary">
				Mulai Pelajari
			</a>
		</div>
	</section>

	<section
		id="getting-started"
		class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4"
	></section>
</main>
