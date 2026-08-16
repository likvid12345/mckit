<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
</script>

<PotionGuide
	name="Night Vision"
	intro="Lets you see clearly in the dark and underwater, without increasing the actual light level"
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
			title: 'Add Golden Carrot',
			text: 'Add a Golden Carrot to your Awkward Potions to brew Night Vision. The base potion lasts 3 minutes.',
			infoNote:
				"Golden Carrot is crafted with 1 Carrot surrounded by 8 Gold Nuggets on a crafting table — it doesn't drop from anything directly.",
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
			sectionLabel: 'Optional upgrades',
			title: 'Extend the duration',
			text: 'Add Redstone Dust to stretch the effect from 3 minutes to 8 minutes. Night Vision has no Tier II version, so Glowstone Dust does nothing to it — Redstone is the only real upgrade.',
			ingredient: { label: 'Redstone Dust' },
			potions: [{ label: 'Night Vision' }, { label: 'Night Vision' }, { label: 'Night Vision' }],
			resultPotions: [
				{ label: 'Night Vision (8:00)' },
				{ label: 'Night Vision (8:00)' },
				{ label: 'Night Vision (8:00)' }
			]
		},
		{
			number: 4,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Night Vision potion to turn it into a throwable Splash Potion — handy for giving allies vision without brewing extras for each of them.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Night Vision' }, { label: 'Night Vision' }, { label: 'Night Vision' }],
			resultPotions: [
				{ label: 'Splash Night Vision' },
				{ label: 'Splash Night Vision' },
				{ label: 'Splash Night Vision' }
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
				{ label: 'Splash Night Vision' },
				{ label: 'Splash Night Vision' },
				{ label: 'Splash Night Vision' }
			],
			resultPotions: [
				{ label: 'Lingering Night Vision' },
				{ label: 'Lingering Night Vision' },
				{ label: 'Lingering Night Vision' }
			]
		}
	]}
/>
