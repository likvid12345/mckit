<script>
	import PotionGuide from '$lib/components/element-components/PotionGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<PotionGuide
		name="Oozing"
		intro="Makes whoever dies while affected spawn 2 Slimes on the spot"
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
				title: 'Add Slime Block',
				text: "Add a Slime Block to your Awkward Potions to brew Oozing. The effect lasts 3 minutes, but it doesn't do anything until the affected entity dies — that's when the 2 Slimes spawn.",
				infoNote:
					"This potion can't be improved with Redstone or Glowstone — the 3-minute duration and 2-slime spawn are fixed, no matter what you add.",
				ingredient: { label: 'Slime Block' },
				potions: [
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' },
					{ label: 'Awkward Potion' }
				],
				resultPotions: [{ label: 'Oozing' }, { label: 'Oozing' }, { label: 'Oozing' }]
			},
			{
				number: 3,
				title: 'Make it a Splash Potion',
				text: 'Add Gunpowder to any Oozing potion to turn it into a throwable Splash Potion — this is the version you actually want. Throw it at mobs in an existing farm to turn any kill into a slime spawn, without needing a slime chunk or swamp biome.',
				ingredient: { label: 'Gunpowder' },
				potions: [{ label: 'Oozing' }, { label: 'Oozing' }, { label: 'Oozing' }],
				resultPotions: [
					{ label: 'Splash Oozing' },
					{ label: 'Splash Oozing' },
					{ label: 'Splash Oozing' }
				]
			},
			{
				number: 4,
				title: 'Make it a Lingering Potion',
				text: "Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas cloud that affects anyone who walks through it — useful for coating an entire mob farm's kill zone at once.",
				infoNote:
					"Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the Ender Dragon — it captures the dragon's breath attack clouds during the fight.",
				ingredient: { label: "Dragon's Breath" },
				potions: [
					{ label: 'Splash Oozing' },
					{ label: 'Splash Oozing' },
					{ label: 'Splash Oozing' }
				],
				resultPotions: [
					{ label: 'Lingering Oozing' },
					{ label: 'Lingering Oozing' },
					{ label: 'Lingering Oozing' }
				]
			}
		]}
	/>
{:else}
	<div class="premium-card">
		<span class="eyebrow">PREMIUM</span>

		<h1>Oozing potion recipe is a premium feature</h1>

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
