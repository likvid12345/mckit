<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Quartz"
		intro="A common Nether resource used for redstone components, trading, and clean modern building."
		foundAt="Y=10 to Y=117 (Nether only)"
		bestHeight="No single peak — spread evenly across its range"
		minTool="Any Pickaxe"
		biomes={[
			{
				name: 'Any Nether biome',
				desc: 'Nether Quartz Ore generates throughout the Nether, so you can mine it in almost any environment'
			},
			{
				name: 'Basalt Deltas',
				desc: 'Quartz has more generation attempts here, making it a surprisingly productive place to mine despite the rough terrain'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Increases how much Nether Quartz drops from each ore block. Fortune is especially useful when gathering quartz for large redstone projects or building materials."
		fortuneLevels={[
			{ label: 'No Fortune', value: '1' },
			{ label: 'Fortune I', value: '1–2' },
			{ label: 'Fortune II', value: '1–3' },
			{ label: 'Fortune III', value: '1–4' }
		]}
		uses={[
			'Blocks of Quartz and Quartz Pillars',
			'Comparators',
			'Daylight Sensors',
			'Observers',
			'Trading with Mason villagers for Emeralds',
			'Decorative building and interior designs'
		]}
		note="Don't want to mine for quartz? Piglins can barter Nether Quartz when given Gold Ingots, giving you another renewable way to stock up while exploring the Nether."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Quartz guide is a premium feature</h1>

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
