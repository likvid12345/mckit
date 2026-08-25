<script>
	import TrimGuide from '$lib/components/element-components/TrimGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<TrimGuide
		name="Eye"
		intro="A cosmetic pattern you can stamp onto any armor piece — the most reliable trim in the game to find."
		rarity="Uncommon"
		structure="Stronghold Library chests"
		dropChance="100% (Library) — Altar chests only give ~10%"
		duplicateMaterial="End Stone"
		locateText="Strongholds generate deep underground and are found by throwing Eyes of Ender into the air and following the direction they float. Each Eye of Ender has a chance to break, so bring a stack of at least 12–16. You'll need to trade Emeralds with a Cleric villager or craft them from Blaze Powder and Ender Pearls."
		whereText="Every Stronghold has 1 to 3 Library rooms, and every Library chest is guaranteed to contain an Eye trim — no RNG involved. Altar chests (found in the small circular rooms) can also drop it, but only about 10% of the time, so head for the Library first."
		duplicateText="Applying a trim consumes the template, so always duplicate before using your only copy. This recipe works in any slot arrangement — you just need all the ingredients on the grid."
		applyText="Take the template, an armor piece, and any trim material (like Iron Ingot or Copper Ingot) to a Smithing Table. The template and material are consumed, and the trim appears on the armor permanently — trims are purely cosmetic and never affect stats."
		colorNote="Emerald, Amethyst, and Diamond all give Eye a magical, arcane look — Emerald and Amethyst lean mysterious, while Diamond makes the pattern brighter and easier to spot."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Eye armor trim guide is a premium feature</h1>

			<p>Unlock MCKit Premium to access this guide and all other premium armor trim guides.</p>

			<button onclick={() => (current.page = 'premium')}>
				Unlock Premium
				<span>→</span>
			</button>
		</div>
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
