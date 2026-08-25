<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<PotionGuide
		name="Weakness"
		intro="Reduces melee attack damage on whoever drinks it"
		steps={[
			{
				number: 1,
				title: 'Add Fermented Spider Eye',
				text: "Add a Fermented Spider Eye directly to 3 Water Bottles. Weakness is the only potion that skips the Awkward Potion step — Nether Wart isn't needed at all.",
				infoNote:
					'Fermented Spider Eye is crafted, not found — combine 1 Spider Eye, 1 Sugar, and 1 Brown Mushroom on a crafting table.',
				ingredient: { label: 'Fermented Spider Eye' },
				potions: [{ label: 'Water Bottle' }, { label: 'Water Bottle' }, { label: 'Water Bottle' }],
				resultPotions: [{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }]
			},
			{
				number: 2,
				sectionLabel: 'Optional upgrades',
				title: 'Extend the duration',
				text: 'Add Redstone Dust to stretch the effect from 1:30 to 4:00. Weakness has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
				ingredient: { label: 'Redstone Dust' },
				potions: [{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }],
				resultPotions: [
					{ label: 'Weakness (4:00)' },
					{ label: 'Weakness (4:00)' },
					{ label: 'Weakness (4:00)' }
				]
			},
			{
				number: 3,
				title: 'Make it a Splash Potion',
				text: 'Add Gunpowder to any Weakness potion to turn it into a throwable Splash Potion. This is the version you actually want — Weakness is mainly used on other mobs and players, especially for curing zombie villagers, and drinking it yourself just weakens your own attacks.',
				ingredient: { label: 'Gunpowder' },
				potions: [{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }],
				resultPotions: [
					{ label: 'Splash Weakness' },
					{ label: 'Splash Weakness' },
					{ label: 'Splash Weakness' }
				]
			},
			{
				number: 4,
				title: 'Make it a Lingering Potion',
				text: "Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas cloud that affects anyone who walks through it.",
				infoNote:
					"Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the Ender Dragon — it captures the dragon's breath attack clouds during the fight.",
				ingredient: { label: "Dragon's Breath" },
				potions: [
					{ label: 'Splash Weakness' },
					{ label: 'Splash Weakness' },
					{ label: 'Splash Weakness' }
				],
				resultPotions: [
					{ label: 'Lingering Weakness' },
					{ label: 'Lingering Weakness' },
					{ label: 'Lingering Weakness' }
				]
			}
		]}
	/>
{:else}
	<div class="premium-card">
		<span class="eyebrow">PREMIUM</span>

		<h1>Weakness potion recipe is a premium feature</h1>

		<p>Unlock MCKit Premium to access this guide and all other premium guides.</p>

		<button onclick={() => (current.page = 'premium')}>
			Unlock Premium
			<span>→</span>
		</button>
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
