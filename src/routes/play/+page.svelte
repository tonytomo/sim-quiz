<script>
	import { base } from '$app/paths';
	import Button from '$lib/components/button.svelte';
</script>

<main>
	<section>
		<hgroup>
			<h1>Siap untuk bermain <span>Quiz?</span></h1>
			<p>Kamu bisa upload kuis dengan klik tombol di bawah ini.</p>
		</hgroup>

		<div class="action">
			<Button label="Upload" variant="primary" />
			<Button href={base + '/'} label="Kembali" variant="neutral" />
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
