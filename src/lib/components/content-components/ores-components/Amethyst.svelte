<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Amethyst"
		intro="A decorative crystal found inside geodes, used for Spyglasses and Tinted Glass."
		foundAt="Y=-58 to Y=30 (inside Geode structures)"
		bestHeight="Y=-40 to Y=-58"
		minTool="Any Pickaxe"
		biomes={[
			{
				name: 'Not biome-specific',
				desc: 'Geodes generate anywhere underground — look for a smooth basalt shell with a visible crack'
			},
			{
				name: 'Deepslate layer',
				desc: "Geodes are denser near Y=-40 to -58, where there's less competition from cave generation"
			}
		]}
		enchantName="Fortune"
		enchantDesc="Increases shard drops from fully grown clusters. Silk Touch drops the cluster block itself instead of shards — useful for decoration, not farming."
		fortuneLevels={[
			{ label: 'No Fortune', value: '4' },
			{ label: 'Fortune I', value: '4 or 8' },
			{ label: 'Fortune II', value: '4, 8 or 12' },
			{ label: 'Fortune III', value: '4, 8, 12 or 16' }
		]}
		uses={[
			'Spyglass (with Copper Ingots)',
			'Tinted Glass (with Glass)',
			'Block of Amethyst — decorative',
			'Calibrated Sculk Sensors'
		]}
		note="Only fully grown clusters drop shards — small, medium, and large buds drop nothing. Never mine the budding amethyst block itself; it's what keeps growing new clusters over time."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Amethyst guide is a premium feature</h1>

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
