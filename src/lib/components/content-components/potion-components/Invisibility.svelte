<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Invisibility"
	intro="Hides your player model from other mobs and players for a limited time"
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
			title: 'Brew a Potion of Night Vision',
			text: "Add a Golden Carrot to your Awkward Potions to brew Night Vision. This is just a stepping stone — you'll corrupt it into Invisibility in the next step.",
			infoNote:
				'Golden Carrot is crafted with 1 Carrot surrounded by 8 Gold Nuggets on a crafting table.',
			ingredient: { label: 'Golden Carrot' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Night Vision' },
				{ label: 'Night Vision' },
				{ label: 'Night Vision' }
			]
		},
		{
			number: 3,
			title: 'Corrupt it with Fermented Spider Eye',
			text: "Add a Fermented Spider Eye to your Night Vision potions to flip the effect into Invisibility. This is the only way to brew Invisibility — there's no direct recipe for it.",
			infoNote:
				'Fermented Spider Eye is crafted, not found — combine 1 Spider Eye, 1 Sugar, and 1 Brown Mushroom on a crafting table.',
			ingredient: { label: 'Fermented Spider Eye' },
			potions: [{ label: 'Night Vision' }, { label: 'Night Vision' }, { label: 'Night Vision' }],
			resultPotions: [
				{ label: 'Invisibility' },
				{ label: 'Invisibility' },
				{ label: 'Invisibility' }
			]
		},
		{
			number: 4,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 3 minutes to 8 minutes. Invisibility has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Invisibility' }, { label: 'Invisibility' }, { label: 'Invisibility' }],
			resultPotions: [
				{ label: 'Invisibility (8:00)' },
				{ label: 'Invisibility (8:00)' },
				{ label: 'Invisibility (8:00)' }
			]
		},
		{
			number: 5,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Invisibility potion to turn it into a throwable Splash Potion — useful for hiding allies during a coordinated sneak.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Invisibility' }, { label: 'Invisibility' }, { label: 'Invisibility' }],
			resultPotions: [
				{ label: 'Splash Invisibility' },
				{ label: 'Splash Invisibility' },
				{ label: 'Splash Invisibility' }
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
				{ label: 'Splash Invisibility' },
				{ label: 'Splash Invisibility' },
				{ label: 'Splash Invisibility' }
			],
			resultPotions: [
				{ label: 'Lingering Invisibility' },
				{ label: 'Lingering Invisibility' },
				{ label: 'Lingering Invisibility' }
			]
		}
	]}
/>
