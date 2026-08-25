<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
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
{:else}
	<div class="premium-card">
		<span class="eyebrow">PREMIUM</span>

		<h1>Harming potion recipe is a premium feature</h1>

		<p>Unlock MCKit Premium to access this guide and all other premium guides.</p>

		<button onclick={() => (current.page = 'premium')}>
			Unlock Premium
			<span>→</span>
		</button>
	</div>
{/if}

<style>
	.premium-card {
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.025);
	}

	.eyebrow {
		display: block;
		margin-bottom: 0.4rem;
		color: var(--secondary);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
	}

	h1 {
		margin: 0;
		color: white;
		font-size: 1.5rem;
		line-height: 1.3;
	}

	p {
		max-width: 600px;
		margin: 0.9rem 0 1.25rem;
		color: rgba(255, 255, 255, 0.65);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.55rem 1rem;
		border: 1px solid color-mix(in srgb, var(--secondary) 60%, transparent);
		border-radius: 7px;
		background: var(--secondary);
		color: white;
		font-size: 0.9rem;
		font-weight: 700;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			opacity 0.15s ease;
	}

	button span {
		font-size: 1.1rem;
		line-height: 1;
	}

	button:hover {
		transform: translateY(-1px);
		opacity: 0.9;
	}
</style>
