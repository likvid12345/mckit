<script>
	import TrimGuide from '$lib/components/element-components/TrimGuide.svelte';
	import { current } from '../../../../shared.svelte';
</script>

{#if current.isPremium}
	<TrimGuide
		name="Tide"
		intro="A cosmetic pattern you can stamp onto any armor piece — the only trim earned by defeating a mob instead of looting a chest."
		rarity="Rare"
		structure="Elder Guardian (mob drop)"
		dropChance="~20% per kill"
		duplicateMaterial="Prismarine"
		locateText="Elder Guardians only spawn inside Ocean Monuments — large prismarine pyramid structures found underwater in Deep Ocean biomes. Each monument spawns exactly 3 Elder Guardians, so a single monument gives you three separate chances at the trim."
		whereText="This trim isn't found in a chest — you have to defeat an Elder Guardian directly. Each one has a 20% chance to drop the trim on death, regardless of how it dies or whether Looting is used. Elder Guardians also inflict Mining Fatigue on nearby players, so bring Milk Buckets or a Potion of Water Breathing to fight comfortably."
		duplicateText="Applying a trim consumes the template, so always duplicate before using your only copy. This recipe works in any slot arrangement — you just need all the ingredients on the grid."
		applyText="Take the template, an armor piece, and any trim material (like Iron Ingot or Copper Ingot) to a Smithing Table. The template and material are consumed, and the trim appears on the armor permanently — trims are purely cosmetic and never affect stats."
		colorNote="Diamond and Lapis Lazuli both reinforce Tide's ocean theme, while Quartz gives it a clean, monument-like highlight that mirrors the prismarine architecture it's inspired by."
	/>
{:else}
	<div class="premium-wrapper">
		<div class="premium-card">
			<span class="eyebrow">PREMIUM</span>

			<h1>Tide Armor Trim guide is a premium feature</h1>

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
