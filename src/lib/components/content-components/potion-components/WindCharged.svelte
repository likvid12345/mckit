<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Wind Charged"
	intro="Releases a burst of wind that pushes nearby entities away whenever the affected target takes damage"
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
			title: 'Add Breeze Rod',
			text: 'Add a Breeze Rod to your Awkward Potions to brew Wind Charged. The effect lasts 3 minutes — while active, taking damage triggers a wind burst that knocks nearby entities back.',
			infoNote:
				"This potion can't be improved with Redstone or Glowstone — the 3-minute duration is fixed, no matter what you add. Breeze Rods only drop from Breeze mobs, which only spawn from Trial Spawners inside Trial Chambers — there's no other source.",
			ingredient: { label: 'Breeze Rod' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Wind Charged' },
				{ label: 'Wind Charged' },
				{ label: 'Wind Charged' }
			]
		},
		{
			number: 3,
			title: 'Make it a Splash Potion',
			text: "Add Gunpowder to any Wind Charged potion to turn it into a throwable Splash Potion — this is the version you actually want. Throw it at enemies to knock them off ledges or away from you whenever they're hit.",
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Wind Charged' }, { label: 'Wind Charged' }, { label: 'Wind Charged' }],
			resultPotions: [
				{ label: 'Splash Wind Charged' },
				{ label: 'Splash Wind Charged' },
				{ label: 'Splash Wind Charged' }
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
				{ label: 'Splash Wind Charged' },
				{ label: 'Splash Wind Charged' },
				{ label: 'Splash Wind Charged' }
			],
			resultPotions: [
				{ label: 'Lingering Wind Charged' },
				{ label: 'Lingering Wind Charged' },
				{ label: 'Lingering Wind Charged' }
			]
		}
	]}
/>
