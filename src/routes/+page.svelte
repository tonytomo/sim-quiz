<script>
	import { base } from '$app/paths';
	import Button from '$lib/components/button.svelte';
	import profile from '$lib/stores/profile';
	import { onMount } from 'svelte';

	onMount(() => {
		const storedName = localStorage.getItem('simquiz_name');
		if (!storedName) return;
		$profile.name = storedName;
	});
</script>

<main>
	<section>
		<hgroup>
			{#if $profile.name}
				<h1>
					Halo <span>{$profile.name}</span>, selamat datang!
				</h1>
			{:else}
				<h1>Buat dan mainkan kuis dengan <span>SimQuiz!</span></h1>
				<p>
					SimQuiz adalah aplikasi web yang memungkinkan kamu membuat dan memainkan kuis interaktif
					dengan mudah. Apakah kamu siap untuk mulai?
				</p>
			{/if}
		</hgroup>

		<div class="action">
			{#if $profile.name}
				<Button href={base + '/play'} label="Mulai" variant="primary" />
				<Button href={base + '/hello'} label="Ubah Nama" variant="success" />
			{:else}
				<Button href={base + '/hello'} label="Kenalan Yuk" variant="info" />
			{/if}
		</div>
	</section>
</main>

<style>
	.action {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
	}

	@media (min-width: 600px) {
		.action {
			flex-direction: row;
			justify-content: center;
			gap: 1rem;
			margin-top: 4rem;
		}
	}
</style>
