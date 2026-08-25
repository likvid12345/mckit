<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Nether Gold"
		intro="A Nether-exclusive gold source that drops gold nuggets and can turn dangerous caves into a steady gold supply."
		foundAt="Y=10 to Y=117 (Nether only)"
		bestHeight="No single peak — spread evenly across its range"
		minTool="Any Pickaxe"
		biomes={[
			{
				name: 'Any Nether biome',
				desc: 'Nether Gold Ore generates throughout the Nether, including Nether Wastes, Crimson Forests, and Warped Forests'
			},
			{
				name: 'Basalt Deltas',
				desc: 'Generates more frequently here than in other Nether biomes, making the dangerous terrain surprisingly rewarding'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Increases the number of Gold Nuggets dropped per block. Fortune III can produce a large number of nuggets, but Silk Touch can be useful if you want to smelt the ore into Gold Ingots."
		fortuneLevels={[
			{ label: 'No Fortune', value: '2–6' },
			{ label: 'Fortune I', value: '4–12' },
			{ label: 'Fortune II', value: '4–18' },
			{ label: 'Fortune III', value: '4–24' }
		]}
		uses={[
			'Gold Nuggets for crafting',
			'Golden Apples and Golden Carrots',
			'Piglin bartering',
			'Gold Ingots and Gold Blocks',
			'Gold tools, weapons, and armor'
		]}
		note="Mining Nether Gold Ore normally angers nearby Piglins, even if you're wearing gold armor. Mine carefully, block yourself in when necessary, or use Silk Touch if you want to avoid the immediate nugget drops."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Nether Gold guide is a premium feature</h1>

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
