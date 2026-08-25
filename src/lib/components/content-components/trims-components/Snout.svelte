<script>
	import TrimGuide from '$lib/components/element-components/TrimGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<TrimGuide
		name="Snout"
		intro="A cosmetic pattern you can stamp onto any armor piece — inspired by the piglins that guard it."
		rarity="Rare"
		structure="Bastion Remnant chests"
		dropChance="~8.3% per chest"
		duplicateMaterial="Blackstone"
		locateText="Bastion Remnants generate in the Nether Wastes, Soul Sand Valley, Warped Forest, and Crimson Forest biomes — they look like large dark towers made of blackstone. Use /locate structure minecraft:bastion_remnant if playing with cheats enabled, since exploring the Nether on foot is slow and dangerous."
		whereText="Bastions come in four layouts — Bridge, Hoglin Stable, Housing, and Treasure Room — and each one has multiple independent chests. The Treasure Room variant is the best target, since its chests sit behind a heavily guarded corridor but offer the most loot rolls in one place. Wearing gold armor makes piglins ignore you, though opening a chest in front of them still alerts nearby mobs."
		duplicateText="Applying a trim consumes the template, so always duplicate before using your only copy. This recipe works in any slot arrangement — you just need all the ingredients on the grid."
		applyText="Take the template, an armor piece, and any trim material (like Iron Ingot or Copper Ingot) to a Smithing Table. The template and material are consumed, and the trim appears on the armor permanently — trims are purely cosmetic and never affect stats."
		colorNote="Gold is the natural fit for Snout, matching the piglin theme it's based on, while Netherite keeps the whole set dark and Redstone gives it a dangerous, glowing edge."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Snout Armor Trim guide is a premium feature</h1>

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
