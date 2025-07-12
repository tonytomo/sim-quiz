<script>
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';

	let show = false;
	const openModal = () => (show = true);
	const closeModal = () => (show = false);
</script>

<main>
	<section class="hero">
		<hgroup class="hero-group">
			<h1 class="hero-text">
				Create, learn, and play quizzes with <span class="logo">SimQuiz!</span>
			</h1>

			<figure class="hero-image">
				<div class="txt">
					<p class="top">quiz.txt</p>
				</div>
			</figure>
		</hgroup>

		<div class="action">
			<a href={base + '/about'} class="btn-neutral mr">What is this?</a>

			<a href={base + '/play'} class="btn-primary">play</a>

			<a href="#aa" class="btn-info">Create a quiz</a>
		</div>
	</section>

	{#if show}
		<div id="code-modal" class="code-modal" transition:fade>
			<div class="code-modal-content" transition:fly={{ y: 100, duration: 300 }}>
				<h2>Write your quiz code below</h2>

				<div class="modal">
					<input type="text" placeholder="Quiz code" />
					<button class="btn-error">Clear</button>
				</div>

				<button class="btn-accent" on:click={closeModal}>Open quiz</button>
				<button class="btn-neutral" on:click={closeModal}>Close</button>
			</div>
		</div>
	{/if}
</main>

<style>
	.code-modal {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(5px);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
	.code-modal-content {
		background-color: var(--bg);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 2rem;
		width: 90%;
		max-width: 600px;
		border-radius: 0.5rem;
		box-shadow: 0 4px 0 var(--accent);
	}
</style>
