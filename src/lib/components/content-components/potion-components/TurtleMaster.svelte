<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Turtle Master"
	intro="Grants Resistance and Slowness at the same time — great for tanking damage when you don't need to move"
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
			title: 'Add Turtle Shell',
			text: 'Add a Turtle Shell to your Awkward Potions to brew Turtle Master. The base potion grants Resistance III and Slowness IV for 20 seconds.',
			infoNote:
				'Turtle Shell is crafted from 5 Scutes arranged like a helmet — Scutes only drop when a baby turtle grows into an adult, so this takes some planning ahead with a turtle farm.',
			ingredient: { label: 'Turtle Shell' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Turtle Master' },
				{ label: 'Turtle Master' },
				{ label: 'Turtle Master' }
			]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 20 seconds to 40 seconds, without changing the effect strength. Most players consider this the better pick — 20 seconds is barely enough time to react.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Turtle Master' }, { label: 'Turtle Master' }, { label: 'Turtle Master' }],
			resultPotions: [
				{ label: 'Turtle Master (0:40)' },
				{ label: 'Turtle Master (0:40)' },
				{ label: 'Turtle Master (0:40)' }
			]
		},
		{
			number: 4,
			title: 'Upgrade to Turtle Master II',
			text: "Add Glowstone Dust instead to boost the effect to Resistance IV and Slowness VI, though the duration stays at 20 seconds. You can only pick one — Redstone and Glowstone can't both be applied to the same potion.",
			ingredient: { label: 'Glowstone Dust' },
			potions: [{ label: 'Turtle Master' }, { label: 'Turtle Master' }, { label: 'Turtle Master' }],
			resultPotions: [
				{ label: 'Turtle Master II' },
				{ label: 'Turtle Master II' },
				{ label: 'Turtle Master II' }
			]
		},
		{
			number: 5,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Turtle Master potion to turn it into a throwable Splash Potion — useful for protecting allies, though it also slows down whoever you throw it at.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Turtle Master' }, { label: 'Turtle Master' }, { label: 'Turtle Master' }],
			resultPotions: [
				{ label: 'Splash Turtle Master' },
				{ label: 'Splash Turtle Master' },
				{ label: 'Splash Turtle Master' }
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
				{ label: 'Splash Turtle Master' },
				{ label: 'Splash Turtle Master' },
				{ label: 'Splash Turtle Master' }
			],
			resultPotions: [
				{ label: 'Lingering Turtle Master' },
				{ label: 'Lingering Turtle Master' },
				{ label: 'Lingering Turtle Master' }
			]
		}
	]}
/>
