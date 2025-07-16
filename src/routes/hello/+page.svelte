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
		localStorage.setItem('simquiz_name', name.trim());
		goto(base + '/');
	}

	function clearName() {
		localStorage.removeItem('simquiz_name');
		goto(base + '/');
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
				<h1>
					Halo namaku <span>Sim!</span>
					Kenalan dulu yuk!
				</h1>
			{/if}
		</hgroup>

		<div class="action">
			<input type="text" {name} placeholder="Tulis namamu..." bind:value={name} />

			<div class="action-flex">
				{#if storedName}
					<Button label="Ubah" variant="success" onclick={storeName} />
					<Button label="Hapus" variant="danger" onclick={clearName} />
				{:else}
					<Button label="Halo" variant="primary" onclick={storeName} />
				{/if}
				<Button href={base + '/'} label="Kembali" variant="neutral" />
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
		padding: 1rem 1.5rem;
		font-size: 1.2rem;
		outline: none;
		border: none;
		border-radius: 10px;
		box-shadow: 0 8px 0 var(--mid);
		width: 100%;
		max-width: 420px;
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
