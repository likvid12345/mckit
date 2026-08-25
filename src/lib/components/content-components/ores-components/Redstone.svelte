<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Redstone"
		intro="Powers pistons, circuits, and every automated contraption in the game."
		foundAt="Y=-64 to Y=15"
		bestHeight="Y=-59"
		minTool="Iron Pickaxe"
		biomes={[
			{
				name: 'Not biome-specific',
				desc: 'Redstone generates identically in every Overworld biome — only depth matters, not location'
			},
			{
				name: 'Deep overlap zone',
				desc: 'Y=-63 to -32 combines two generation batches, making it the densest band'
			}
		]}
		enchantName="Fortune"
		enchantDesc="Increases how much redstone dust drops per block. Silk Touch gives you the ore block itself instead of dust — mostly useful for decoration."
		fortuneLevels={[
			{ label: 'No Fortune', value: '4–5' },
			{ label: 'Fortune I', value: '4–6' },
			{ label: 'Fortune II', value: '4–7' },
			{ label: 'Fortune III', value: '4–8' }
		]}
		uses={[
			'Redstone Dust for circuits and wiring',
			'Pistons and Sticky Pistons',
			'Repeaters and Comparators',
			'Redstone Torches and Lamps',
			'Powered Rails',
			'Compass and Clock',
			'Trading with Cleric villagers'
		]}
		note="Redstone ore glows and drops sparkling particles when stepped on or hit — useful for spotting it in the dark from a distance."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Redstone guide is a premium feature</h1>

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
