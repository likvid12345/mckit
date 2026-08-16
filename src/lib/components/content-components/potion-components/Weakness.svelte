<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Weakness"
	intro="Reduces melee attack damage on whoever drinks it"
	steps={[
		{
			number: 1,
			title: 'Add Fermented Spider Eye',
			text: "Add a Fermented Spider Eye directly to 3 Water Bottles. Weakness is the only potion that skips the Awkward Potion step — Nether Wart isn't needed at all.",
			infoNote:
				'Fermented Spider Eye is crafted, not found — combine 1 Spider Eye, 1 Sugar, and 1 Brown Mushroom on a crafting table.',
			ingredient: { label: 'Fermented Spider Eye' },
			potions: [{ label: 'Water Bottle' }, { label: 'Water Bottle' }, { label: 'Water Bottle' }],
			resultPotions: [{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }]
		},
		{
			number: 2,
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 1:30 to 4:00. Weakness has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }],
			resultPotions: [
				{ label: 'Weakness (4:00)' },
				{ label: 'Weakness (4:00)' },
				{ label: 'Weakness (4:00)' }
			]
		},
		{
			number: 3,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Weakness potion to turn it into a throwable Splash Potion. This is the version you actually want — Weakness is mainly used on other mobs and players, especially for curing zombie villagers, and drinking it yourself just weakens your own attacks.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }],
			resultPotions: [
				{ label: 'Splash Weakness' },
				{ label: 'Splash Weakness' },
				{ label: 'Splash Weakness' }
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
				{ label: 'Splash Weakness' },
				{ label: 'Splash Weakness' },
				{ label: 'Splash Weakness' }
			],
			resultPotions: [
				{ label: 'Lingering Weakness' },
				{ label: 'Lingering Weakness' },
				{ label: 'Lingering Weakness' }
			]
		}
	]}
/>
