<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Fire Resistance"
	intro="Makes you immune to fire, lava, and other fire-based damage for a limited time"
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
			title: 'Add Magma Cream',
			text: 'Add Magma Cream to your Awkward Potions to brew Fire Resistance. The base potion lasts 3 minutes.',
			infoNote:
				'Only the smallest Magma Cubes drop Magma Cream — larger ones split into smaller cubes when killed, so keep attacking until you reach the smallest size.',
			ingredient: { label: 'Magma Cream' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Fire Resistance' },
				{ label: 'Fire Resistance' },
				{ label: 'Fire Resistance' }
			]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 3 minutes to 8 minutes. Fire Resistance has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
			ingredient: { label: 'Redstone Dust' },
			potions: [
				{ label: 'Fire Resistance' },
				{ label: 'Fire Resistance' },
				{ label: 'Fire Resistance' }
			],
			resultPotions: [
				{ label: 'Fire Resistance (8:00)' },
				{ label: 'Fire Resistance (8:00)' },
				{ label: 'Fire Resistance (8:00)' }
			]
		},
		{
			number: 4,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Fire Resistance potion to turn it into a throwable Splash Potion — useful for protecting allies during a Nether trip or lava-heavy build.',
			ingredient: { label: 'Gunpowder' },
			potions: [
				{ label: 'Fire Resistance' },
				{ label: 'Fire Resistance' },
				{ label: 'Fire Resistance' }
			],
			resultPotions: [
				{ label: 'Splash Fire Resistance' },
				{ label: 'Splash Fire Resistance' },
				{ label: 'Splash Fire Resistance' }
			]
		},
		{
			number: 5,
			title: 'Make it a Lingering Potion',
			text: "Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas cloud that affects anyone who walks through it.",
			infoNote:
				"Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the Ender Dragon — it captures the dragon's breath attack clouds during the fight.",
			ingredient: { label: "Dragon's Breath" },
			potions: [
				{ label: 'Splash Fire Resistance' },
				{ label: 'Splash Fire Resistance' },
				{ label: 'Splash Fire Resistance' }
			],
			resultPotions: [
				{ label: 'Lingering Fire Resistance' },
				{ label: 'Lingering Fire Resistance' },
				{ label: 'Lingering Fire Resistance' }
			]
		}
	]}
/>
