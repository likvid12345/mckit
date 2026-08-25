<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Diamond"
		intro="The most sought-after resource in the game — top-tier tools, armor, and enchanting."
		foundAt="Y=-64 to Y=16"
		bestHeight="Y=-59"
		minTool="Iron Pickaxe"
		biomes={[
			{
				name: 'Not biome-specific',
				desc: 'Diamond spawns identically in every biome — only depth affects your odds'
			},
			{
				name: 'Deepslate layer',
				desc: 'Below Y=0, diamonds become far more common than in the stone layer above'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Increases how many diamonds drop per block. If you find diamonds before getting Fortune III, mine them with Silk Touch instead and save the blocks — breaking them later with Fortune III still gives you the full bonus."
		fortuneLevels={[
			{ label: 'No Fortune', value: '1' },
			{ label: 'Fortune I', value: '1–2' },
			{ label: 'Fortune II', value: '1–3' },
			{ label: 'Fortune III', value: '1–4' }
		]}
		uses={[
			'Diamond tools, weapons, and armor',
			'Enchanting Table (with Obsidian and Book)',
			'Jukebox',
			'Netherite gear — combined with Netherite Ingots',
			'Trading with Cleric and Toolsmith villagers'
		]}
		note="Watch out for lava at this depth. Mine at Y=-53 or -54 instead of Y=-59 if lava keeps ruining your runs — you'll find slightly fewer diamonds, but far less risk."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Diamond guide is a premium feature</h1>

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
