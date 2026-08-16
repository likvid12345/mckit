<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Slow Falling"
	intro="Slows your descent and removes all fall damage while active"
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
			title: 'Add Phantom Membrane',
			text: 'Add a Phantom Membrane to your Awkward Potions to brew Slow Falling. The base potion lasts 1 minute 30 seconds.',
			infoNote:
				"Phantoms only spawn after 3+ nights without sleeping, and drop 0–1 membrane (up to 4 with Looting). A tamed cat also has a small chance to gift you one after you sleep, if you'd rather skip the phantom hunting.",
			ingredient: { label: 'Phantom Membrane' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Slow Falling' },
				{ label: 'Slow Falling' },
				{ label: 'Slow Falling' }
			]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 1:30 to 4:00. Slow Falling has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Slow Falling' }, { label: 'Slow Falling' }, { label: 'Slow Falling' }],
			resultPotions: [
				{ label: 'Slow Falling (4:00)' },
				{ label: 'Slow Falling (4:00)' },
				{ label: 'Slow Falling (4:00)' }
			]
		},
		{
			number: 4,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Slow Falling potion to turn it into a throwable Splash Potion — a solid emergency option for saving a falling ally, since it applies the moment it lands.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Slow Falling' }, { label: 'Slow Falling' }, { label: 'Slow Falling' }],
			resultPotions: [
				{ label: 'Splash Slow Falling' },
				{ label: 'Splash Slow Falling' },
				{ label: 'Splash Slow Falling' }
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
				{ label: 'Splash Slow Falling' },
				{ label: 'Splash Slow Falling' },
				{ label: 'Splash Slow Falling' }
			],
			resultPotions: [
				{ label: 'Lingering Slow Falling' },
				{ label: 'Lingering Slow Falling' },
				{ label: 'Lingering Slow Falling' }
			]
		}
	]}
/>
