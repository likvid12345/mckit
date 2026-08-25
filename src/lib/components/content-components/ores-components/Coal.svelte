<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<OreGuide
		name="Coal"
		intro="One of the most common and useful resources in the game."
		foundAt="Y=0 to Y=320"
		bestHeight="Y=96"
		minTool="Wooden Pickaxe"
		biomes={[
			{
				name: 'Windswept Hills',
				desc: 'Exposed stone cliffs make coal easy to spot without mining'
			},
			{ name: 'Mountains', desc: 'Tall peaks expose ore veins across a huge height range' }
		]}
		enchantName="Fortune"
		enchantDesc="Increases how much coal drops per block. Silk Touch works too, but isn't very useful here since coal already drops as an item without needing to be smelted."
		fortuneLevels={[
			{ label: 'No Fortune', value: '1' },
			{ label: 'Fortune I', value: '1–2' },
			{ label: 'Fortune II', value: '1–3' },
			{ label: 'Fortune III', value: '1–4' }
		]}
		uses={[
			'Torches',
			'Furnace and Blast Furnace fuel — smelts up to 8 items',
			'Campfires',
			'Fire Charges',
			'Trading with Fisherman villagers',
			'Block of Coal — compact storage, stronger fuel'
		]}
		note="No Coal yet? Smelt any log or wood in a furnace to get Charcoal — it works as a substitute in almost every recipe."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Coal guide is a premium feature</h1>

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
