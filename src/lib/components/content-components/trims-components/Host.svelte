<script>
	import TrimGuide from '$lib/components/element-components/TrimGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<TrimGuide
		name="Host"
		intro="A cosmetic pattern you can stamp onto any armor piece — one of four found only through archaeology."
		rarity="Rare"
		structure="Trail Ruins (Suspicious Gravel)"
		dropChance="~8.3% per brushed block (Java)"
		duplicateMaterial="Terracotta"
		locateText="Trail Ruins are buried structures found in Taiga, Snowy Taiga, Old Growth Taiga, Old Growth Birch Forest, and Jungle biomes. They're almost entirely underground, so look for exposed terracotta or unusually textured gravel poking out of the terrain while exploring on foot or horseback."
		whereText="This trim doesn't come from a chest — it's hidden inside Suspicious Gravel blocks, which look slightly different from regular gravel. Craft a Brush (Feather on top, Copper Ingot in the middle, Stick on the bottom) and use it on suspicious blocks to slowly reveal the item inside. Mining suspicious gravel with a regular tool destroys the loot completely — always use the brush. Since Wayfinder, Raiser, Shaper, and Host all come from the same source, one site can yield all four if you brush enough blocks."
		duplicateText="Applying a trim consumes the template, so always duplicate before using your only copy. This recipe works in any slot arrangement — you just need all the ingredients on the grid."
		applyText="Take the template, an armor piece, and any trim material (like Iron Ingot or Copper Ingot) to a Smithing Table. The template and material are consumed, and the trim appears on the armor permanently — trims are purely cosmetic and never affect stats."
		colorNote="Netherite and Amethyst both pair surprisingly well with Host despite its simple, minimal pattern — the bold, dark tones give an otherwise plain design a clean, elegant finish."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Host Armor Trim guide is a premium feature</h1>

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
