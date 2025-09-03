<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loading = true;
	onMount(() => (loading = false));
</script>

<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center">
	{#if !loading}
		<hgroup class="flex flex-col items-center text-center" in:fly={{ y: 20, duration: 400 }}>
			<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
				<div class="marquee effect-3d scrollbar-none">
					<p
						class="text-[12rem] font-black tracking-tighter text-gray-400 uppercase dark:text-gray-700"
					>
						{#each Array(4) as _, i}
							sim<span class="text-gradient">quiz</span>
						{/each}
					</p>
				</div>
			</div>
			<h1 class="px-4 text-xl font-medium md:text-2xl">
				SimQuiz: Platform untuk Simulasi dan Membuat Kuis
			</h1>
		</hgroup>

		<div class="mt-8 text-center" in:fly={{ y: 20, duration: 400, delay: 200 }}>
			<a href="/start" title="Mulai Kuis" class="btn btn-lg btn-primary">Mulai Simulasi</a>
			<p class="pt-4 text-sm text-gray-600 dark:text-gray-400">atau letakkan file di sini</p>
		</div>
	{/if}
</section>
