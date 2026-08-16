<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

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
			resultPotions: [{ label: 'Strength II' }, { label: 'Strength II' }, { label: 'Strength II' }]
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
