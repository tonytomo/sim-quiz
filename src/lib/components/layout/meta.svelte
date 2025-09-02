<script lang="ts">
	import { assets, base } from '$app/paths';

	export let title = 'SimQuiz: Platform untuk Simulasi dan Membuat Kuis';
	export let description =
		'SimQuiz adalah platform kuis yang memungkinkan pengguna membuat, berbagi, dan memainkan kuis menarik tentang beragam topik. Baik kamu ingin menguji pengetahuan, menantang teman, atau menjelajahi topik baru, SimQuiz menjadikan pembuatan dan partisipasi kuis mudah dan menyenangkan bagi semua orang.';
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
