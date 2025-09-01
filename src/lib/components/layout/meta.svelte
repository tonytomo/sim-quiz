<script lang="ts">
	import { assets, base } from '$app/paths';

	export let title = 'SimQuiz - Quiz Platform for Simulation and Making Quizzes';
	export let description =
		'SimQuiz is a comprehensive quiz platform that empowers users to create, share, and play engaging quizzes on a wide range of topics. Whether you want to test your knowledge, challenge friends, or explore new subjects, SimQui makes quiz creation and participation easy and fun for everyone.';
	const author = 'tonytomo';
	const robots = 'index, follow';
	const lightThemeColor = '#f3f4f6';
	const darkThemeColor = '#030712';
	const ogImage = `${assets}/maskable-icon-512x512.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<meta name="theme-color" content={lightThemeColor} media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content={darkThemeColor} media="(prefers-color-scheme: dark)" />
	<meta name="robots" content={robots} />
	<meta name="googlebot" content={robots} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={base} />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<link rel="icon" href="{assets}/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="{assets}/favicon.ico" type="image/x-icon" />
	<link rel="apple-touch-icon" href="{assets}/apple-touch-icon-180x180.png" />
	<link rel="canonical" href="https://simquiz.tonytomo.me" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
