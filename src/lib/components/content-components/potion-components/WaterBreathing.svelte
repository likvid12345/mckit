<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Water Breathing"
	intro="Stops your air meter from draining underwater, letting you explore without surfacing for air"
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
			title: 'Add Pufferfish',
			text: 'Add a Pufferfish to your Awkward Potions to brew Water Breathing. The base potion lasts 3 minutes.',
			infoNote:
				'Pufferfish are caught by fishing in Warm or Lukewarm Ocean biomes — the Lure enchantment speeds up bites, making them easier to farm.',
			ingredient: { label: 'Pufferfish' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Water Breathing' },
				{ label: 'Water Breathing' },
				{ label: 'Water Breathing' }
			]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 3 minutes to 8 minutes. Water Breathing has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
			ingredient: { label: 'Redstone Dust' },
			potions: [
				{ label: 'Water Breathing' },
				{ label: 'Water Breathing' },
				{ label: 'Water Breathing' }
			],
			resultPotions: [
				{ label: 'Water Breathing (8:00)' },
				{ label: 'Water Breathing (8:00)' },
				{ label: 'Water Breathing (8:00)' }
			]
		},
		{
			number: 4,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Water Breathing potion to turn it into a throwable Splash Potion — useful for giving allies underwater access before a monument raid.',
			ingredient: { label: 'Gunpowder' },
			potions: [
				{ label: 'Water Breathing' },
				{ label: 'Water Breathing' },
				{ label: 'Water Breathing' }
			],
			resultPotions: [
				{ label: 'Splash Water Breathing' },
				{ label: 'Splash Water Breathing' },
				{ label: 'Splash Water Breathing' }
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
				{ label: 'Splash Water Breathing' },
				{ label: 'Splash Water Breathing' },
				{ label: 'Splash Water Breathing' }
			],
			resultPotions: [
				{ label: 'Lingering Water Breathing' },
				{ label: 'Lingering Water Breathing' },
				{ label: 'Lingering Water Breathing' }
			]
		}
	]}
/>
