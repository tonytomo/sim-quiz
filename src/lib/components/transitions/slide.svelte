<script>
	import { fly } from 'svelte/transition';
</script>

<div
	class="layout"
	in:fly={{ x: 100, duration: 1000, delay: 500 }}
	out:fly={{ x: -100, duration: 400 }}
>
	<slot />
</div>
