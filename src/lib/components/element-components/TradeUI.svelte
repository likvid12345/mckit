<script>
	let { give, receive } = $props();
</script>

<div class="trade-ui">
	<div class="trade-slot">
		{#if give?.icon}
			<img src={give.icon} alt={give.label} class="trade-icon" />
		{/if}
		<p class="trade-name">{give?.label ?? ''}</p>
		{#if give?.amount}
			<p class="trade-amount">x{give.amount}</p>
		{/if}
	</div>

	<div class="trade-arrow">→</div>

	<div class="trade-slot receive-slot">
		{#if receive?.icon}
			<img src={receive.icon} alt={receive.label} class="trade-icon" />
		{/if}
		<p class="trade-name">{receive?.label ?? ''}</p>
		{#if receive?.amount}
			<p class="trade-amount">x{receive.amount}</p>
		{/if}
	</div>
</div>

<style>
	.trade-ui {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background-color: #242427;
		border: 1px solid #3a3a3d;
		border-radius: 1rem;
		padding: 1rem;
	}

	.trade-slot {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		background-color: #1a1a1c;
		border: 1px solid #3a3a3d;
		border-radius: 0.75rem;
		aspect-ratio: 1 / 1;
		padding: 0.75rem;
		min-width: 0;
	}

	.trade-icon {
		width: 32px;
		height: 32px;
	}

	.trade-name {
		color: white;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: center;
		margin: 0;
	}

	.trade-amount {
		color: #8a8a8d;
		font-weight: bold;
		font-size: 0.75rem;
		margin: 0;
	}

	.trade-arrow {
		color: #6a6a6d;
		font-size: 1.3rem;
		flex-shrink: 0;
	}

	.receive-slot {
		border-color: var(--secondary);
	}
</style>
