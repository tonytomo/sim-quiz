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
		height: 66px;
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
		font-size: 1.25rem;
		color: var(--text);
		height: 58px;
		min-width: 240px;
		margin-bottom: 8px;
		padding: 0 2rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition:
			box-shadow 0.2s,
			margin-top 0.2s;
	}
	.btn:active {
		margin-top: 8px;
		box-shadow: none !important;
	}

	.btn.primary {
		background-color: var(--primary);
		box-shadow: 0 4px 0 4px var(--primary-dark);
	}
	.btn.primary:hover {
		background-color: var(--primary-hover);
	}

	.btn.secondary {
		background-color: var(--secondary);
		box-shadow: 0 4px 0 4px var(--secondary-dark);
	}
	.btn.secondary:hover {
		background-color: var(--secondary-hover);
	}

	.btn.accent {
		background-color: var(--accent);
		box-shadow: 0 4px 0 4px var(--accent-dark);
	}
	.btn.accent:hover {
		background-color: var(--accent-hover);
	}

	.btn.neutral {
		background-color: var(--neutral);
		box-shadow: 0 4px 0 4px var(--neutral-dark);
	}
	.btn.neutral:hover {
		background-color: var(--neutral-hover);
	}

	.btn.info {
		background-color: var(--info);
		box-shadow: 0 4px 0 4px var(--info-dark);
	}
	.btn.info:hover {
		background-color: var(--info-hover);
	}

	.btn.danger {
		background-color: var(--danger);
		box-shadow: 0 4px 0 4px var(--danger-dark);
	}
	.btn.danger:hover {
		background-color: var(--danger-hover);
	}

	.btn.success {
		background-color: var(--success);
		box-shadow: 0 4px 0 4px var(--success-dark);
	}
	.btn.success:hover {
		background-color: var(--success-hover);
	}

	@media (min-width: 600px) {
		.btn-container {
			height: 80px;
		}
		.btn {
			font-size: 1.5rem;
			padding: 0 3rem;
			height: 72px;
			min-width: auto;
		}
	}
</style>
