<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button from '$lib/components/button.svelte';
	import { onMount } from 'svelte';

	let name = '';
	let storedName: string | null = '';

	onMount(() => {
		storedName = localStorage.getItem('simquiz_name');
		if (!storedName) return;
		name = storedName;
	});

	function storeName() {
		if (!name) return;
		name = name.trim();
		name = name.charAt(0).toUpperCase() + name.slice(1);
		localStorage.setItem('simquiz_name', name);

		if (!storedName) {
			goto(base + '/');
			return;
		}
		goto(base + '/profile');
	}
</script>

<main>
	<section>
		<hgroup>
			{#if storedName}
				<h1>
					Halo <span>{storedName}</span>, apa kabar?
				</h1>
			{:else}
				<h1>Halo, namaku <span>Siqu!</span> <br /> Siapa namamu?</h1>
				<p>Tulis namamu di bawah ini, supaya aku bisa memanggilmu dengan nama yang kamu suka.</p>
			{/if}
		</hgroup>

		<div class="action">
			<input type="text" {name} placeholder="Tulis namamu..." bind:value={name} />

			<div class="action-flex">
				{#if storedName}
					<Button label="Ubah" variant="success" onclick={storeName} />
				{:else}
					<Button label="Halo" variant="primary" onclick={storeName} />
				{/if}
				<Button href={base + '/profile'} label="Kembali" variant="neutral" />
			</div>
		</div>
	</section>
</main>

<style>
	.action {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;
	}

	input {
		padding: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
		outline: none;
		border: none;
		border-radius: 10px;
		box-shadow: 0 4px 0 4px var(--mid);
		width: 100%;
		max-width: 280px;
	}

	.action-flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 1rem;
		margin-top: 1rem;
	}

	@media (min-width: 600px) {
		.action {
			margin-top: 4rem;
		}

		input {
			padding: 1.5rem 2rem;
		}
	}
</style>
