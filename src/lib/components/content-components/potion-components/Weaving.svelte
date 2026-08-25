<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<PotionGuide
		name="Weaving"
		intro="Lets you move through Cobwebs faster and drops 2–3 Cobwebs when the affected entity dies"
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
				title: 'Add Cobweb',
				text: "Add a Cobweb to your Awkward Potions to brew Weaving. The effect lasts 3 minutes and doesn't do anything on its own — it only spawns 2–3 Cobwebs once the affected entity dies.",
				infoNote:
					"This potion can't be improved with Redstone or Glowstone — the 3-minute duration and cobweb drop are fixed, no matter what you add. Mine Cobwebs with Shears to keep the source item intact.",
				ingredient: { label: 'Cobweb' },
				potions: [
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' }
				],
				resultPotions: [{ label: 'Weaving' }, { label: 'Weaving' }, { label: 'Weaving' }]
			},
			{
				number: 3,
				title: 'Make it a Splash Potion',
				text: 'Add Gunpowder to any Weaving potion to turn it into a throwable Splash Potion — this is the version you actually want. Throw it at mobs to farm renewable Cobwebs for decoration or builds.',
				ingredient: { label: 'Gunpowder' },
				potions: [{ label: 'Weaving' }, { label: 'Weaving' }, { label: 'Weaving' }],
				resultPotions: [
					{ label: 'Splash Weaving' },
					{ label: 'Splash Weaving' },
					{ label: 'Splash Weaving' }
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
					{ label: 'Splash Weaving' },
					{ label: 'Splash Weaving' },
					{ label: 'Splash Weaving' }
				],
				resultPotions: [
					{ label: 'Lingering Weaving' },
					{ label: 'Lingering Weaving' },
					{ label: 'Lingering Weaving' }
				]
			}
		]}
	/>
{:else}
	<div class="premium-card">
		<span class="eyebrow">PREMIUM</span>

		<h1>Weaving potion recipe is a premium feature</h1>

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
