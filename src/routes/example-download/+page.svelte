<script lang="ts">
	import { onMount } from 'svelte';

	const downloadUrl =
		'https://drive.google.com/uc?export=download&id=10pLNjxNd9Y1hZYchlFBF7x_HqY9FtpAT';

	onMount(() => (window.location.href = downloadUrl));
</script>
