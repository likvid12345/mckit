<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Lapis Lazuli"
		intro="A deep blue mineral that powers your enchanting table."
		foundAt="Y=-64 to Y=64"
		bestHeight="Y=0"
		minTool="Stone Pickaxe"
		biomes={[
			{
				name: 'Not biome-specific',
				desc: 'Lapis generates the same amount in every Overworld biome — depth is what matters, not location'
			},
			{
				name: 'Stone/Deepslate border',
				desc: 'Y=0 sits right where both distribution batches overlap for the highest concentration'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Multiplies your lapis drops per block. Since lapis drops the resource directly rather than a block, Fortune is always the better pick over Silk Touch."
		fortuneLevels={[
			{ label: 'No Fortune', value: '4–9' },
			{ label: 'Fortune I', value: '8–18' },
			{ label: 'Fortune II', value: '8–27' },
			{ label: 'Fortune III', value: '8–36' }
		]}
		uses={[
			'Enchanting Table fuel — 1 to 3 lapis per enchantment',
			'Blue Dye for wool, glass, concrete, and terracotta',
			'Cartography Table (with Compass)',
			'Trading with Cleric villagers for Emeralds'
		]}
		note="Lapis Lazuli Block (9 lapis) is a handy way to store large amounts compactly — and since Fortune II/III can average more than 9 per block, a single ore vein can sometimes out-produce a full lapis block."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Lapis Lazuli guide is a premium feature</h1>

			<p>Unlock MCKit Premium to access this guide and all other premium ore guides.</p>

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
