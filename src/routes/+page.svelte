<script>
	import { base } from '$app/paths';
	import Button from '$lib/components/button.svelte';
	import profile, { resetProfile } from '$lib/stores/profile';
	import { onMount } from 'svelte';

	onMount(() => {
		const storedName = localStorage.getItem('simquiz_name');
		if (!storedName) return;
		$profile.name = storedName;
	});

	function clearName() {
		localStorage.removeItem('simquiz_name');
		resetProfile();
	}
</script>

<main>
	<section>
		<hgroup>
			{#if $profile.name}
				<h1>
					Selamat datang, <span>{$profile.name}!</span>
				</h1>
			{:else}
				<h1>Mulai membuat dan bermain kuis bersama <span>Siqu!</span></h1>
				<p>Kamu bisa membuat dan memainkan kuis interaktif dengan mudah. Yuk, mulai sekarang!</p>
			{/if}
		</hgroup>

		<div class="action">
			{#if $profile.name}
				<Button href={base + '/play'} label="Mulai" variant="primary" />
				<Button href={base + '/profile'} label="Profil" variant="accent" />
				<Button label="Keluar" variant="danger" onclick={clearName} />
			{:else}
				<Button href={base + '/hello'} label="Mulai" variant="info" />
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
			column-gap: 1rem;
			margin-top: 4rem;
		}
	}
</style>
