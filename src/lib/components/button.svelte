<script lang="ts">
	interface ButtonProps {
		href?: string;
		label: string;
		variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'danger' | 'success';
		onclick?: () => void;
	}

	let { href, label, variant = 'primary', onclick }: ButtonProps = $props();
</script>

<div class="btn-container">
	{#if href}
		<a class="btn {variant}" {href}>
			{label}
		</a>
	{:else}
		<button class="btn {variant}" {onclick}>
			{label}
		</button>
	{/if}
</div>

<style>
	.btn-container {
		height: 42px;
		margin: 0.5rem 0;
	}

	.btn {
		border: none;
		border-radius: 10px;
		cursor: pointer;
		text-decoration: none;
		text-transform: uppercase;
		font-family: var(--system-ui);
		font-weight: bold;
		font-size: 1.15rem;
		color: var(--text);
		height: 36px;
		min-width: 160px;
		margin-bottom: 6px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition:
			box-shadow 0.2s,
			margin-top 0.2s;
	}
	.btn:active {
		margin-top: 6px;
		box-shadow: none !important;
	}

	@media (min-width: 600px) {
		.btn-container {
			height: 54px;
		}
		.btn {
			font-size: 1.5rem;
			padding: 0 2rem;
			height: 48px;
			min-width: auto;
		}
	}
</style>
