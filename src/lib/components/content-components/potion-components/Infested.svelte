<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Infested"
	intro="Gives whoever is affected a chance to spawn Silverfish each time they take damage"
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
			title: 'Add Stone',
			text: 'Add a Stone block to your Awkward Potions to brew Infested. The effect lasts 3 minutes — while active, taking damage has a 10% chance to spawn 1–2 Silverfish.',
			infoNote:
				"This potion can't be improved with Redstone or Glowstone — the 3-minute duration and 10% spawn chance are fixed, no matter what you add. Regular Stone is required, not Cobblestone.",
			ingredient: { label: 'Stone' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Infested' }, { label: 'Infested' }, { label: 'Infested' }]
		},
		{
			number: 3,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Infested potion to turn it into a throwable Splash Potion — this is the version you actually want. Thrown at a high-health mob like a Ravager and hit repeatedly with low-damage attacks, it becomes one of the fastest Silverfish-based XP farms in the game.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Infested' }, { label: 'Infested' }, { label: 'Infested' }],
			resultPotions: [
				{ label: 'Splash Infested' },
				{ label: 'Splash Infested' },
				{ label: 'Splash Infested' }
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
				{ label: 'Splash Infested' },
				{ label: 'Splash Infested' },
				{ label: 'Splash Infested' }
			],
			resultPotions: [
				{ label: 'Lingering Infested' },
				{ label: 'Lingering Infested' },
				{ label: 'Lingering Infested' }
			]
		}
	]}
/>
