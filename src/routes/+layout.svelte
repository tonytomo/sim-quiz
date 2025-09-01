<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { detectVersion } from '$lib/utils/app/version';
	import Meta from '$lib/components/layout/meta.svelte';

	let { children } = $props();

	onMount(async () => await detectVersion());
</script>

<Meta />

{@render children()}
