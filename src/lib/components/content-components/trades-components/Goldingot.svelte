<script>
	import goldingot from '$lib/assets/trades/goldingot.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<Trade
		title="Gold Ingot → Emerald"
		intro="A solid trade if you're running a gold farm in the Nether."
		jobSiteName="Brewing Stand"
		jobSiteRecipe={[
			{ label: '' },
			{ label: 'Blaze Rod' },
			{ label: '' },
			{ label: '' },
			{ label: '' },
			{ label: '' },
			{ label: 'Cobblestone' },
			{ label: 'Cobblestone' },
			{ label: 'Cobblestone' }
		]}
		professionName="Cleric"
		give={{ label: 'Gold Ingot', amount: 3, icon: goldingot }}
		receive={{ label: 'Emerald', amount: 1 }}
		note="This trade unlocks at Apprentice level. Gold isn't especially useful outside this trade, so it's a great way to turn Nether gold farm output into emeralds."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Gold Ingot → Emerald trade is a premium feature</h1>

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
