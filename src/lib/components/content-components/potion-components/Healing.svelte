<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	let isPremium = $state(false);
</script>

{#if isPremium}
	<PotionGuide
		name="Healing"
		intro="Restores health instantly the moment you drink it"
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
				title: 'Add Glistering Melon Slice',
				text: 'Add a Glistering Melon Slice to your Awkward Potions to brew Healing.',
				infoNote:
					"Glistering Melon Slice isn't mined or found — you craft it yourself with 1 Melon Slice surrounded by 8 Gold Nuggets on a crafting table.",
				ingredient: { label: 'Glistering Melon Slice' },
				potions: [
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' }
				],
				resultPotions: [{ label: 'Healing I' }, { label: 'Healing I' }, { label: 'Healing I' }]
			},
			{
				number: 3,
				sectionLabel: 'Optional upgrades',
				title: 'Upgrade to Healing II',
				text: 'Add Glowstone Dust to your Healing I potions to double the amount of health restored.',
				ingredient: { label: 'Glowstone Dust' },
				potions: [{ label: 'Healing I' }, { label: 'Healing I' }, { label: 'Healing I' }],
				resultPotions: [{ label: 'Healing II' }, { label: 'Healing II' }, { label: 'Healing II' }]
			},
			{
				number: 4,
				title: 'Make it a Splash Potion',
				text: 'Add Gunpowder to any Healing potion to turn it into a throwable Splash Potion — useful for healing allies or, thrown at undead mobs, dealing damage instead.',
				ingredient: { label: 'Gunpowder' },
				potions: [{ label: 'Healing' }, { label: 'Healing' }, { label: 'Healing' }],
				resultPotions: [
					{ label: 'Splash Healing' },
					{ label: 'Splash Healing' },
					{ label: 'Splash Healing' }
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
					{ label: 'Splash Healing' },
					{ label: 'Splash Healing' },
					{ label: 'Splash Healing' }
				],
				resultPotions: [
					{ label: 'Lingering Healing' },
					{ label: 'Lingering Healing' },
					{ label: 'Lingering Healing' }
				]
			}
		]}
	/>
{:else}
	<p>buy premium to unlock this</p>
{/if}
