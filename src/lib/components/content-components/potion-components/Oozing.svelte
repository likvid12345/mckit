<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Oozing"
	intro="Makes whoever dies while affected spawn 2 Slimes on the spot"
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
			title: 'Add Slime Block',
			text: "Add a Slime Block to your Awkward Potions to brew Oozing. The effect lasts 3 minutes, but it doesn't do anything until the affected entity dies — that's when the 2 Slimes spawn.",
			infoNote:
				"This potion can't be improved with Redstone or Glowstone — the 3-minute duration and 2-slime spawn are fixed, no matter what you add.",
			ingredient: { label: 'Slime Block' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Oozing' }, { label: 'Oozing' }, { label: 'Oozing' }]
		},
		{
			number: 3,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Oozing potion to turn it into a throwable Splash Potion — this is the version you actually want. Throw it at mobs in an existing farm to turn any kill into a slime spawn, without needing a slime chunk or swamp biome.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Oozing' }, { label: 'Oozing' }, { label: 'Oozing' }],
			resultPotions: [
				{ label: 'Splash Oozing' },
				{ label: 'Splash Oozing' },
				{ label: 'Splash Oozing' }
			]
		},
		{
			number: 4,
			title: 'Make it a Lingering Potion',
			text: "Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas cloud that affects anyone who walks through it — useful for coating an entire mob farm's kill zone at once.",
			infoNote:
				"Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the Ender Dragon — it captures the dragon's breath attack clouds during the fight.",
			ingredient: { label: "Dragon's Breath" },
			potions: [{ label: 'Splash Oozing' }, { label: 'Splash Oozing' }, { label: 'Splash Oozing' }],
			resultPotions: [
				{ label: 'Lingering Oozing' },
				{ label: 'Lingering Oozing' },
				{ label: 'Lingering Oozing' }
			]
		}
	]}
/>
