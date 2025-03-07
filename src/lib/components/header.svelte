<script lang="ts">
	import { goto } from '$app/navigation';
	import theme from '$lib/themes/theme';

	let { isBack }: { isBack?: boolean } = $props();
</script>

<header class={theme.container.top + 'p-4'}>
	<figure class={theme.text.logo}>
		SimQuiz<span class={theme.text.logo + 'animate-pulse'}>.</span>
	</figure>
	{#if isBack}
		<button aria-label="Back" class={theme.button.ghost} onclick={() => window.history.back()}>
			<i class="ri-arrow-go-back-line"></i>
		</button>
	{:else}
		<button aria-label="About" class={theme.button.ghost} onclick={() => goto('/about')}>
			<i class="ri-information-line"></i>
		</button>
	{/if}
</header>
