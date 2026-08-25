<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Copper"
		intro="A versatile ore used for redstone builds, decoration, and a few key tools."
		foundAt="Y=-16 to Y=112"
		bestHeight="Y=48"
		minTool="Stone Pickaxe"
		biomes={[
			{
				name: 'Dripstone Caves',
				desc: 'Adds a second, much larger batch of copper veins on top of the normal generation'
			},
			{
				name: 'Any Overworld biome',
				desc: 'Copper generates everywhere underground, so regular caves work too'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Multiplies your raw copper drops per block. Silk Touch is usually the wrong choice here since it just gives you the ore block instead of raw copper."
		fortuneLevels={[
			{ label: 'No Fortune', value: '2–5' },
			{ label: 'Fortune I', value: '2–10' },
			{ label: 'Fortune II', value: '2–15' },
			{ label: 'Fortune III', value: '2–20' }
		]}
		uses={[
			'Lightning Rods',
			'Spyglass',
			'Brushes (for archaeology)',
			'Copper Blocks, Doors, Trapdoors, and Grates',
			'Copper Bulbs — a redstone light component',
			'Decorative blocks that oxidize and change color over time'
		]}
		note="Copper ore requires at least a Stone Pickaxe — mining it with a Wooden Pickaxe destroys the block and gives you nothing."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Copper guide is a premium feature</h1>

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
