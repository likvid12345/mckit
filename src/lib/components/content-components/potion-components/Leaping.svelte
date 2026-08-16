<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Leaping"
	intro="Grants Jump Boost, letting you jump higher and reducing fall damage while active"
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
			title: "Add Rabbit's Foot",
			text: "Add a Rabbit's Foot to your Awkward Potions to brew Leaping. The base potion lasts 3 minutes.",
			infoNote:
				"Rabbit's Foot is one of the rarest common drops in the game — rabbits only have a 10% chance to drop it, boosted with Looting.",
			ingredient: { label: "Rabbit's Foot" },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Leaping' }, { label: 'Leaping' }, { label: 'Leaping' }]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 3 minutes to 8 minutes.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Leaping' }, { label: 'Leaping' }, { label: 'Leaping' }],
			resultPotions: [
				{ label: 'Leaping (8:00)' },
				{ label: 'Leaping (8:00)' },
				{ label: 'Leaping (8:00)' }
			]
		},
		{
			number: 4,
			title: 'Upgrade to Leaping II',
			text: "Add Glowstone Dust instead to jump even higher, though the duration drops to just 1 minute 30 seconds. You can only pick one — Redstone and Glowstone can't both be applied to the same potion.",
			ingredient: { label: 'Glowstone Dust' },
			potions: [{ label: 'Leaping' }, { label: 'Leaping' }, { label: 'Leaping' }],
			resultPotions: [{ label: 'Leaping II' }, { label: 'Leaping II' }, { label: 'Leaping II' }]
		},
		{
			number: 5,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Leaping potion to turn it into a throwable Splash Potion.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Leaping' }, { label: 'Leaping' }, { label: 'Leaping' }],
			resultPotions: [
				{ label: 'Splash Leaping' },
				{ label: 'Splash Leaping' },
				{ label: 'Splash Leaping' }
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
				{ label: 'Splash Leaping' },
				{ label: 'Splash Leaping' },
				{ label: 'Splash Leaping' }
			],
			resultPotions: [
				{ label: 'Lingering Leaping' },
				{ label: 'Lingering Leaping' },
				{ label: 'Lingering Leaping' }
			]
		}
	]}
/>
