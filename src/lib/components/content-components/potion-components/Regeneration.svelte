<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	import AdSlot from '$lib/components/element-components/AdSlot.svelte';
</script>

<PotionGuide
	name="Regeneration"
	intro="Regenerates your health over time"
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
			title: 'Add Ghast Tear',
			text: 'Add a Ghast Tear to your Awkward Potions to brew Regeneration.',
			ingredient: { label: 'Ghast Tear' },
			potions: [
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			],
			resultPotions: [
				{ label: 'Regeneration I' },
				{ label: 'Regeneration I' },
				{ label: 'Regeneration I' }
			]
		},
		{
			number: 3,
			sectionLabel: 'Optional upgrades',
			title: 'Upgrade to Regeneration II',
			text: 'Add Glowstone Dust to your Regeneration I potions to upgrade them to a stronger, shorter Regeneration II.',
			ingredient: { label: 'Glowstone Dust' },
			potions: [
				{ label: 'Regeneration I' },
				{ label: 'Regeneration I' },
				{ label: 'Regeneration I' }
			],
			resultPotions: [
				{ label: 'Regeneration II' },
				{ label: 'Regeneration II' },
				{ label: 'Regeneration II' }
			]
		},
		{
			number: 4,
			title: 'Make it a Splash Potion',
			text: 'Add Gunpowder to any Regeneration potion to turn it into a throwable Splash Potion.',
			ingredient: { label: 'Gunpowder' },
			potions: [{ label: 'Regeneration' }, { label: 'Regeneration' }, { label: 'Regeneration' }],
			resultPotions: [
				{ label: 'Splash Regeneration' },
				{ label: 'Splash Regeneration' },
				{ label: 'Splash Regeneration' }
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
				{ label: 'Splash Regeneration' },
				{ label: 'Splash Regeneration' },
				{ label: 'Splash Regeneration' }
			],
			resultPotions: [
				{ label: 'Lingering Regeneration' },
				{ label: 'Lingering Regeneration' },
				{ label: 'Lingering Regeneration' }
			]
		}
	]}
/>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
</style>
