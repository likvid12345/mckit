<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Slowness"
	intro="Reduces movement speed for whoever drinks or is hit with it"
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
			title: 'Brew a Potion of Swiftness',
			text: "Add Sugar to your Awkward Potions to brew Swiftness. This is just a stepping stone — you'll corrupt it into Slowness in the next step.",
			ingredient: { label: 'Sugar' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Swiftness' }, { label: 'Swiftness' }, { label: 'Swiftness' }]
		},
		{
			number: 3,
			title: 'Corrupt it with Fermented Spider Eye',
			text: "Add a Fermented Spider Eye to your Swiftness potions to flip the effect into Slowness. This is the only way to brew Slowness — there's no direct recipe for it.",
			infoNote:
				'Fermented Spider Eye is crafted, not found — combine 1 Spider Eye, 1 Sugar, and 1 Brown Mushroom on a crafting table.',
			ingredient: { label: 'Fermented Spider Eye' },
			potions: [{ label: 'Swiftness' }, { label: 'Swiftness' }, { label: 'Swiftness' }],
			resultPotions: [{ label: 'Slowness' }, { label: 'Slowness' }, { label: 'Slowness' }]
		},
		{
			number: 4,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 1:30 to 4:00.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Slowness' }, { label: 'Slowness' }, { label: 'Slowness' }],
			resultPotions: [
				{ label: 'Slowness (4:00)' },
				{ label: 'Slowness (4:00)' },
				{ label: 'Slowness (4:00)' }
			]
		},
		{
			number: 5,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Slowness potion to turn it into a throwable Splash Potion — most players only ever want this version, since Slowness is meant to be thrown at enemies, not drunk.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Slowness' }, { label: 'Slowness' }, { label: 'Slowness' }],
			resultPotions: [
				{ label: 'Splash Slowness' },
				{ label: 'Splash Slowness' },
				{ label: 'Splash Slowness' }
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
				{ label: 'Splash Slowness' },
				{ label: 'Splash Slowness' },
				{ label: 'Splash Slowness' }
			],
			resultPotions: [
				{ label: 'Lingering Slowness' },
				{ label: 'Lingering Slowness' },
				{ label: 'Lingering Slowness' }
			]
		}
	]}
/>
