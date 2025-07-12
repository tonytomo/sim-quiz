<script>
	import { base } from '$app/paths';
</script>

<main>
	<section class="hero">
		<hgroup class="hero-group">
			<h1 class="hero-text">
				What you need to know about <span class="logo">SimQuiz!</span>
			</h1>

			<p class="hero-subtext">
				SimQuiz lets you easily create and play quizzes—just use your own Notepad or this app to get
				started!
				<br />
				<small>- Tony</small>
			</p>
		</hgroup>

		<div class="action">
			<a href={base + '/'} class="btn-neutral mr">Back</a>

			<a href={base + '/info'} class="btn-info">Information</a>
			<a href={base + '/faq'} class="btn-primary">Need help?</a>
		</div>
	</section>
</main>
