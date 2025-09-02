<script lang="ts">
	import { asset } from '$app/paths';
	import type { ClassValue } from 'svelte/elements';

	let className: ClassValue = 'size-12 md:size-16';
	export { className as class };
	export let href = '/';
	export let title = 'Kembali ke Beranda';
</script>

<a {href} {title}>
	<img src={asset('/favicon.png')} alt={title} {title} class={className} />
</a>
