<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Harming"
	intro="Deals instant damage the moment you drink or get hit by it — the opposite of Healing"
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
			title: 'Brew a Potion of Healing',
			text: "Add a Glistering Melon Slice to your Awkward Potions to brew Healing. This is just a stepping stone — you'll corrupt it into Harming in the next step.",
			infoNote:
				"Glistering Melon Slice isn't found — you craft it yourself with 1 Melon Slice surrounded by 8 Gold Nuggets on a crafting table.",
			ingredient: { label: 'Glistering Melon Slice' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [{ label: 'Healing' }, { label: 'Healing' }, { label: 'Healing' }]
		},
		{
			number: 3,
			title: 'Corrupt it with Fermented Spider Eye',
			text: "Add a Fermented Spider Eye to your Healing potions to flip the effect into Harming. This is the only way to brew Harming — there's no direct recipe for it. Poison works the same way if you'd rather start from that instead.",
			infoNote:
				'Fermented Spider Eye is crafted, not found — combine 1 Spider Eye, 1 Sugar, and 1 Brown Mushroom on a crafting table.',
			ingredient: { label: 'Fermented Spider Eye' },
			potions: [{ label: 'Healing' }, { label: 'Healing' }, { label: 'Healing' }],
			resultPotions: [{ label: 'Harming' }, { label: 'Harming' }, { label: 'Harming' }]
		},
		{
			number: 4,
			sectionLabel: 'Optional upgrades',
			title: 'Upgrade to Harming II',
			text: "Add Glowstone Dust to double the damage dealt. Since Harming is instant, there's no duration to trade off — Glowstone is a pure upgrade here.",
			ingredient: { label: 'Glowstone Dust' },
			potions: [{ label: 'Harming' }, { label: 'Harming' }, { label: 'Harming' }],
			resultPotions: [{ label: 'Harming II' }, { label: 'Harming II' }, { label: 'Harming II' }]
		},
		{
			number: 5,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Harming potion to turn it into a throwable Splash Potion — most players only ever want this version, since Harming is meant to be thrown at enemies, not drunk.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Harming' }, { label: 'Harming' }, { label: 'Harming' }],
			resultPotions: [
				{ label: 'Splash Harming' },
				{ label: 'Splash Harming' },
				{ label: 'Splash Harming' }
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
				{ label: 'Splash Harming' },
				{ label: 'Splash Harming' },
				{ label: 'Splash Harming' }
			],
			resultPotions: [
				{ label: 'Lingering Harming' },
				{ label: 'Lingering Harming' },
				{ label: 'Lingering Harming' }
			]
		}
	]}
/>
