<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<Trade
		title="Clay Ball → Emerald"
		intro="An easy renewable trade if you live near water."
		jobSiteName="Stonecutter"
		jobSiteRecipe={[
			{ label: '' },
			{ label: 'Iron Ingot' },
			{ label: '' },
			{ label: 'Stone' },
			{ label: 'Stone' },
			{ label: 'Stone' },
			{ label: '' },
			{ label: '' },
			{ label: '' }
		]}
		professionName="Mason"
		give={{ label: 'Clay Ball', amount: 10 }}
		receive={{ label: 'Emerald', amount: 1 }}
		note="This trade is guaranteed at Novice level. Clay patches are common near rivers, lakes, and beaches, making this an easy renewable source."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Clay Ball trade is a premium feature</h1>

			<p>Unlock MCKit Premium to access this trade and all other premium villager trades.</p>

			<button onclick={() => (current.page = 'premium')}>
				Unlock Premium
				<span>→</span>
			</button>
		</div>
	</div>
{/if}

<style>
	.premium-card {
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.025);
	}

	.eyebrow {
		display: block;
		margin-bottom: 0.4rem;
		color: var(--secondary);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
	}

	h1 {
		margin: 0;
		color: white;
		font-size: 1.5rem;
		line-height: 1.3;
	}

	p {
		max-width: 600px;
		margin: 0.9rem 0 1.25rem;
		color: rgba(255, 255, 255, 0.65);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.55rem 1rem;
		border: 1px solid color-mix(in srgb, var(--secondary) 60%, transparent);
		border-radius: 7px;
		background: var(--secondary);
		color: white;
		font-size: 0.9rem;
		font-weight: 700;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			opacity 0.15s ease;
	}

	button span {
		font-size: 1.1rem;
		line-height: 1;
	}

	button:hover {
		transform: translateY(-1px);
		opacity: 0.9;
	}
</style>
