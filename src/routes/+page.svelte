<script lang="ts">
	import DropZone from '$lib/components/feature/home/dropZone.svelte';
	import Hero from '$lib/components/feature/home/hero.svelte';
	import Make from '$lib/components/feature/home/make.svelte';
	import Why from '$lib/components/feature/home/why.svelte';
	import MainFooter from '$lib/components/layout/footer/mainFooter.svelte';
	import MainHeader from '$lib/components/layout/header/mainHeader.svelte';
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { animateMarquee } from '$lib/utils/animation/marquee';
	import { onMount } from 'svelte';

	onMount(animateMarquee);
</script>

<MainHeader />
<DropZone />
<main>
	<Ornament size={36} />
	<Ornament pos="bl" size={28} />

	<Hero />
	<Why />
	<Make />
</main>
<MainFooter />
