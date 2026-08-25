<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Iron"
		intro="One of the most essential resources for tools, armor, and countless recipes."
		foundAt="Y=-64 to Y=320"
		bestHeight="Y=16 (underground) or Y=232 (mountains)"
		minTool="Stone Pickaxe"
		biomes={[
			{
				name: 'Mountain Biomes',
				desc: 'Huge exposed veins near Y=232 — often visible without any digging'
			},
			{ name: 'Dripstone Caves', desc: 'Iron veins appear more frequently than in regular caves' }
		]}
		enchantName="Fortune"
		enchantDesc="Increases how much raw iron drops per block. Silk Touch is the alternative if you'd rather move the ore block itself instead."
		fortuneLevels={[
			{ label: 'No Fortune', value: '1' },
			{ label: 'Fortune I', value: '1–2' },
			{ label: 'Fortune II', value: '1–3' },
			{ label: 'Fortune III', value: '1–4' }
		]}
		uses={[
			'Tools, weapons, and armor',
			'Anvils and Buckets',
			'Shears and Flint and Steel',
			'Rails and Minecarts',
			'Iron Golems (with Pumpkin/Carved Pumpkin)',
			'Iron Doors and Trapdoors',
			'Hoppers and Cauldrons',
			'Compass',
			'Beacon pyramid block'
		]}
		note="Iron drops as Raw Iron when mined — smelt it in a furnace to get an Iron Ingot before crafting anything with it."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Iron guide is a premium feature</h1>

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
