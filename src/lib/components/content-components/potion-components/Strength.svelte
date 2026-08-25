<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<PotionGuide
		name="Strength"
		intro="Increases your melee attack damage for a limited time"
		steps={[
			{
				number: 1,
				title: 'Brew an Awkward Potion',
				text: 'Add Nether Wart to 3 Water Bottles to get 3 Awkward Potions.',
				ingredient: { label: 'Nether Wart' },
				potions: [{ label: 'Water Bottle' }, { label: 'Water Bottle' }, { label: 'Water Bottle' }],
				resultPotions: [
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' }
				]
			},
			{
				number: 2,
				title: 'Add Blaze Powder',
				text: 'Add Blaze Powder to your Awkward Potions to brew Strength. The base potion adds +3 attack damage for 3 minutes.',
				ingredient: { label: 'Blaze Powder' },
				potions: [
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' }
				],
				resultPotions: [{ label: 'Strength' }, { label: 'Strength' }, { label: 'Strength' }]
			},
			{
				number: 3,
				sectionLabel: 'Optional upgrades',
				title: 'Extend the duration',
				text: 'Add Redstone Dust to stretch the effect from 3 minutes to 8 minutes, keeping the same +3 damage bonus.',
				ingredient: { label: 'Redstone Dust' },
				potions: [{ label: 'Strength' }, { label: 'Strength' }, { label: 'Strength' }],
				resultPotions: [
					{ label: 'Strength (8:00)' },
					{ label: 'Strength (8:00)' },
					{ label: 'Strength (8:00)' }
				]
			},
			{
				number: 4,
				title: 'Upgrade to Strength II',
				text: "Add Glowstone Dust instead to double the bonus to +6 attack damage, though the duration drops to just 1 minute 30 seconds. You can only pick one — Redstone and Glowstone can't both be applied to the same potion.",
				ingredient: { label: 'Glowstone Dust' },
				potions: [{ label: 'Strength' }, { label: 'Strength' }, { label: 'Strength' }],
				resultPotions: [
					{ label: 'Strength II' },
					{ label: 'Strength II' },
					{ label: 'Strength II' }
				]
			},
			{
				number: 5,
				title: 'Make it a Splash Potion',
				text: 'Add Gunpowder to any Strength potion to turn it into a throwable Splash Potion — good for boosting allies before a fight.',
				ingredient: { label: 'Gunpowder' },
				potions: [{ label: 'Strength' }, { label: 'Strength' }, { label: 'Strength' }],
				resultPotions: [
					{ label: 'Splash Strength' },
					{ label: 'Splash Strength' },
					{ label: 'Splash Strength' }
				]
			},
			{
				number: 6,
				title: 'Make it a Lingering Potion',
				text: "Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas cloud that affects anyone who walks through it.",
				infoNote:
					"Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the Ender Dragon — it captures the dragon's breath attack clouds during the fight.",
				ingredient: { label: "Dragon's Breath" },
				potions: [
					{ label: 'Splash Strength' },
					{ label: 'Splash Strength' },
					{ label: 'Splash Strength' }
				],
				resultPotions: [
					{ label: 'Lingering Strength' },
					{ label: 'Lingering Strength' },
					{ label: 'Lingering Strength' }
				]
			}
		]}
	/>
{:else}
	<div class="premium-card">
		<span class="eyebrow">PREMIUM</span>

		<h1>Strength potion recipe is a premium feature</h1>

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
