<script>
	import CraftingTable from '$lib/components/element-components/CraftingTable.svelte';
	import TradeUI from '$lib/components/element-components/TradeUI.svelte';
</script>

<div class="trade-wrapper">
	<h1 class="page-title">Wheat → Emerald</h1>
	<p class="intro">Turn your wheat farm into a steady emerald income.</p>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">1</span>
			<h2 class="step-title">Craft a Composter</h2>
		</div>
		<p class="step-text">
			A villager needs a Composter nearby to become a Farmer. Craft one using 7 Wooden Slabs (any
			wood type works).
		</p>
		<CraftingTable
			items={[
				{ label: 'Slab' },
				{ label: '' },
				{ label: 'Slab' },
				{ label: 'Slab' },
				{ label: '' },
				{ label: 'Slab' },
				{ label: 'Slab' },
				{ label: 'Slab' },
				{ label: 'Slab' }
			]}
		/>
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">2</span>
			<h2 class="step-title">Turn a villager into a Farmer</h2>
		</div>
		<p class="step-text">
			Place the Composter next to an unemployed villager. They'll automatically claim it as their
			job site and become a Farmer.
		</p>
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">3</span>
			<h2 class="step-title">Trade wheat for emeralds</h2>
		</div>
		<p class="step-text">
			Right-click the Farmer to open the trading menu. On the Novice level, one of their trades will
			let you exchange wheat for emeralds.
		</p>
		<TradeUI give={{ label: 'Wheat', amount: 20 }} receive={{ label: 'Emerald', amount: 1 }} />
	</section>

	<div class="divider"></div>

	<div class="info-note">
		<p>
			Trades run out after a limited number of uses. Let the villager sleep in a nearby bed
			overnight, or wait for the restock timer, to refresh their trades.
		</p>
	</div>
</div>

<style>
	.trade-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
	}

	.page-title {
		color: white;
		font-size: 2rem;
		line-height: 2.2rem;
		margin: 0;
	}

	.intro {
		color: lightgray;
		font-weight: bold;
		margin: 0 0 0.25rem;
	}

	.divider {
		height: 1px;
		background-color: #333336;
		margin: 0.5rem 0;
	}

	.step-section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.step-header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.step-number {
		width: 24px;
		height: 24px;
		flex-shrink: 0;
		border-radius: 0.5rem;
		background-color: var(--secondary);
		color: white;
		font-size: 0.8rem;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step-title {
		color: white;
		font-size: 1.15rem;
		margin: 0;
	}

	.step-text {
		color: #a8a8a8;
		font-weight: bold;
		font-size: 0.9rem;
		margin: 0 0 0.25rem;
	}

	.info-note {
		background-color: rgba(127, 0, 255, 0.12);
		border-left: 3px solid var(--secondary);
		border-radius: 0.5rem;
		padding: 0.75rem 1rem;
		margin: 0;
	}

	.info-note p {
		color: whitesmoke;
		font-size: 0.85rem;
		font-weight: bold;
		margin: 0;
		line-height: 1.4;
	}
</style>
