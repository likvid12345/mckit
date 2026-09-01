<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Poison"
	intro="Deals damage over time to whoever drinks or is hit by it"
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
			title: 'Add Spider Eye',
			text: 'Add a Spider Eye to your Awkward Potions to brew Poison. The base potion lasts 45 seconds.',
			ingredient: { label: 'Spider Eye' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Poison' }, { label: 'Poison' }, { label: 'Poison' }]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 45 seconds to 1 minute 30 seconds, without increasing the damage rate.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Poison' }, { label: 'Poison' }, { label: 'Poison' }],
			resultPotions: [
				{ label: 'Poison (1:30)' },
				{ label: 'Poison (1:30)' },
				{ label: 'Poison (1:30)' }
			]
		},
		{
			number: 4,
			title: 'Upgrade to Poison II',
			text: "Add Glowstone Dust instead to deal damage faster, though the duration drops to just 22 seconds. You can only pick one — Redstone and Glowstone can't both be applied to the same potion.",
			ingredient: { label: 'Glowstone Dust' },
			potions: [{ label: 'Poison' }, { label: 'Poison' }, { label: 'Poison' }],
			resultPotions: [{ label: 'Poison II' }, { label: 'Poison II' }, { label: 'Poison II' }]
		},
		{
			number: 5,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Poison potion to turn it into a throwable Splash Potion — most players only ever want this version, since Poison is meant to be thrown at enemies, not drunk.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Poison' }, { label: 'Poison' }, { label: 'Poison' }],
			resultPotions: [
				{ label: 'Splash Poison' },
				{ label: 'Splash Poison' },
				{ label: 'Splash Poison' }
			]
		},
		{
			number: 6,
			title: 'Make it a Lingering Potion',
			text: "Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas cloud that affects anyone who walks through it.",
			infoNote:
				"Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the Ender Dragon — it captures the dragon's breath attack clouds during the fight.",
			ingredient: { label: "Dragon's Breath" },
			potions: [{ label: 'Splash Poison' }, { label: 'Splash Poison' }, { label: 'Splash Poison' }],
			resultPotions: [
				{ label: 'Lingering Poison' },
				{ label: 'Lingering Poison' },
				{ label: 'Lingering Poison' }
			]
		}
	]}
/>
