<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Ancient Debris"
		intro="The rarest ore in the game and the key ingredient for upgrading Diamond gear to Netherite."
		foundAt="Y=8 to Y=22 (Nether only)"
		bestHeight="Y=15 to Y=16"
		minTool="Diamond Pickaxe"
		biomes={[
			{
				name: 'Not biome-specific',
				desc: 'Ancient Debris generates throughout the Nether — the biome above you has no effect on its generation'
			},
			{
				name: 'Never exposed to air',
				desc: 'It always generates buried inside blocks, so you will never find Ancient Debris exposed in an open Nether cave'
			}
		]}
		enchantName="None — Fortune doesn't work here"
		enchantDesc="Every Ancient Debris block drops exactly 1 Ancient Debris regardless of Fortune. Since the ore is extremely blast-resistant, TNT and beds are popular ways to clear large areas quickly."
		fortuneLevels={[
			{ label: 'No Fortune', value: '1' },
			{ label: 'Fortune I', value: '1' },
			{ label: 'Fortune II', value: '1' },
			{ label: 'Fortune III', value: '1' }
		]}
		uses={[
			'Smelt into Netherite Scrap',
			'Craft Netherite Ingots with Gold Ingots',
			'Upgrade Diamond tools and weapons',
			'Upgrade Diamond armor',
			'Upgrade Diamond equipment with a Smithing Table'
		]}
		note="Y=15 is one of the best levels for Ancient Debris mining. Beds and TNT can clear huge amounts of netherrack quickly, while Ancient Debris survives the explosions — making it easy to collect afterward."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Ancient Debris guide is a premium feature</h1>

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
