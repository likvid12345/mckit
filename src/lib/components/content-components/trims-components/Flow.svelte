<script>
	import TrimGuide from '$lib/components/element-components/TrimGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<TrimGuide
		name="Flow"
		intro="A cosmetic pattern you can stamp onto any armor piece — a reward from the hardest version of the Trial Chambers."
		rarity="Rare"
		structure="Trial Chambers (Ominous Vaults)"
		dropChance="~22.5% per Ominous Vault"
		duplicateMaterial="Breeze Rod"
		locateText="Trial Chambers generate underground in the Overworld, between Y=0 and Y=-40, with at least one chamber in every 32x32 chunk area. To access Ominous Vaults, you first need Bad Omen — get it by killing a Pillager Patrol Captain, or by drinking an Ominous Bottle."
		whereText="With Bad Omen active, walk into line of sight of a Trial Spawner to turn it Ominous. Defeat the harder wave of mobs to earn an Ominous Trial Key, which opens the red-skull Ominous Vault. Come prepared — Ominous Trials are noticeably tougher than the standard version, so strong armor and enchantments make a big difference."
		duplicateText="Applying a trim consumes the template, so always duplicate before using your only copy. Unlike every other trim, Flow is duplicated with an item instead of a block — you'll need to farm Breezes for their rods. This recipe works in any slot arrangement — you just need all the ingredients on the grid."
		applyText="Take the template, an armor piece, and any trim material (like Iron Ingot or Copper Ingot) to a Smithing Table. The template and material are consumed, and the trim appears on the armor permanently — trims are purely cosmetic and never affect stats."
		colorNote="Diamond gives Flow a clean cyan streak, Amethyst softens it into a magical tone, and Quartz keeps the swirling wind pattern bright and easy to read."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Flow armor trim guide is a premium feature</h1>

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
