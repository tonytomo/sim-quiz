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
</script>

<main>
	<section>
		<hgroup>
			{#if $profile.name}
				<img src="https://picsum.photos/320/320" alt="Foto profil" class="profile-picture" />
				<h1 class="profile-name">
					<span>{$profile.name}</span>
				</h1>
			{:else}
				<h1>Kamu belum kenalan sama <span>Siqu!</span></h1>
				<p>Ayo, kenalan dulu supaya kita bisa jadi teman!</p>
			{/if}
		</hgroup>

		<figure class="statistic">
			<p class="level">{$profile.level}</p>
			<progress class="exp" value={$profile.experience} max={100}></progress>
		</figure>

		<div class="action">
			{#if $profile.name}
				<Button href={base + '/hello'} label="Ubah Nama" variant="success" />
			{:else}
				<Button href={base + '/hello'} label="Sapa" variant="info" />
			{/if}
			<Button href={base + '/'} label="Kembali" variant="neutral" />
		</div>
	</section>
</main>

<style>
	.profile-picture {
		width: 160px;
		height: 160px;
		border-radius: 20px;
		margin-bottom: 1rem;
		background-color: var(--neutral-hover);
		box-shadow: 0 4px 0 4px var(--neutral-dark);
	}

	.profile-name {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--text);
		margin-bottom: 1rem;
	}

	.statistic {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--text-secondary);
	}

	.level {
		font-size: 1.2rem;
		font-weight: bold;
		color: var(--text);
		margin-bottom: 0.5rem;
	}

	.exp[value] {
		position: relative;
		appearance: none;
		border: none;
		width: 100%;
		max-width: 240px;
		height: 28px;
		margin-bottom: 0.5rem;
		border-radius: 6px;
		box-shadow: 0 2px 0 2px var(--neutral-dark);
	}
	.exp[value]::-webkit-progress-bar {
		background-color: var(--neutral);
		border-radius: 6px;
	}
	.exp[value]::-webkit-progress-value {
		background: var(--logo-gradient);
		border-radius: 6px;
	}

	.action {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
	}

	@media (min-width: 600px) {
		.profile-picture {
			width: 200px;
			height: 200px;
		}

		.profile-name {
			font-size: 2rem;
		}

		.action {
			flex-direction: row;
			justify-content: center;
			column-gap: 1rem;
			margin-top: 2rem;
		}
	}
</style>
