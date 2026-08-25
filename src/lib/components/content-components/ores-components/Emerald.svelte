<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Emerald"
		intro="The rarest Overworld gem, found almost exclusively in mountains and used as Minecraft's main trading currency."
		foundAt="Y=-16 to Y=320 (Mountain biomes only)"
		bestHeight="Y=232"
		minTool="Iron Pickaxe"
		biomes={[
			{
				name: 'Windswept Hills',
				desc: 'Common mountain biome with exposed stone where emerald ore can be spotted without much digging'
			},
			{
				name: 'Stony Peaks',
				desc: 'Bare stone terrain exposes large areas, making emerald ore unusually easy to spot'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Increases how many emeralds drop per block. Emerald ore generates as individual blocks rather than large veins, so Fortune is especially valuable when mining for emeralds."
		fortuneLevels={[
			{ label: 'No Fortune', value: '1' },
			{ label: 'Fortune I', value: '1–2' },
			{ label: 'Fortune II', value: '1–3' },
			{ label: 'Fortune III', value: '1–4' }
		]}
		uses={[
			'Trading currency with villagers',
			'Trading with Wandering Traders',
			'Emerald Blocks for beacon pyramids',
			'Decorative Emerald Blocks'
		]}
		note="Emerald ore only generates in Mountain-family biomes. For actually building up a large emerald supply, villager trading is usually much faster than mining — especially once you have renewable crops, farms, or a good trading hall."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Emerald guide is a premium feature</h1>

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
