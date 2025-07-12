<script>
	import { base } from '$app/paths';
</script>

<main>
	<section class="hero">
		<hgroup class="hero-group">
			<h1 class="hero-text">
				Information about <span class="logo">SimQuiz!</span>
			</h1>
		</hgroup>

		<div class="action">
			<a href={base + '/about'} class="btn-neutral mr">Back</a>

			<a href={base + '/privacy'} class="btn-secondary">Privacy policy</a>
			<a href={base + '/contact'} class="btn-accent">Contact me</a>
		</div>
	</section>
</main>
