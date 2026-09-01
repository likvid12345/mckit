<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Weaving"
	intro="Lets you move through Cobwebs faster and drops 2–3 Cobwebs when the affected entity dies"
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
			title: 'Add Cobweb',
			text: "Add a Cobweb to your Awkward Potions to brew Weaving. The effect lasts 3 minutes and doesn't do anything on its own — it only spawns 2–3 Cobwebs once the affected entity dies.",
			infoNote:
				"This potion can't be improved with Redstone or Glowstone — the 3-minute duration and cobweb drop are fixed, no matter what you add. Mine Cobwebs with Shears to keep the source item intact.",
			ingredient: { label: 'Cobweb' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Weaving' }, { label: 'Weaving' }, { label: 'Weaving' }]
		},
		{
			number: 3,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Weaving potion to turn it into a throwable Splash Potion — this is the version you actually want. Throw it at mobs to farm renewable Cobwebs for decoration or builds.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Weaving' }, { label: 'Weaving' }, { label: 'Weaving' }],
			resultPotions: [
				{ label: 'Splash Weaving' },
				{ label: 'Splash Weaving' },
				{ label: 'Splash Weaving' }
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
				{ label: 'Splash Weaving' },
				{ label: 'Splash Weaving' },
				{ label: 'Splash Weaving' }
			],
			resultPotions: [
				{ label: 'Lingering Weaving' },
				{ label: 'Lingering Weaving' },
				{ label: 'Lingering Weaving' }
			]
		}
	]}
/>
