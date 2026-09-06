<script>
	import Footer from '../element-components/Footer.svelte';
	import AdSlot from '../element-components/AdSlot.svelte';

	import BrewingStand from '$lib/components/element-components/BrewingStand.svelte';
	import CraftingTable from '$lib/components/element-components/CraftingTable.svelte';
</script>

<div class="curing-wrapper">
	<h1 class="page-title">Curing a Zombie Villager</h1>
	<p class="intro">
		Turn a zombie villager back into a normal one — and unlock permanent trade discounts.
	</p>

	<div class="stat-row">
		<div class="stat-card">
			<p class="stat-label">Cure time</p>
			<p class="stat-value">3–5 minutes</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Reward</p>
			<p class="stat-value">Permanent discount</p>
		</div>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Step 1 — Trap it safely</h2>
	<p>
		Corner the zombie villager with dirt or cobblestone, or lure it into a boat, and build a roof
		over it so it doesn't catch fire in sunlight. Keep it enclosed so it can't wander off or die
		while you prepare the next steps.
	</p>

	<div class="divider"></div>

	<h2 class="section-title">Step 2 — Brew a Splash Potion of Weakness</h2>
	<p>
		Start with an Awkward Potion, add a Fermented Spider Eye, then Gunpowder to make it throwable.
	</p>
	<BrewingStand
		ingredient={{ label: 'Nether Wart' }}
		potions={[{ label: 'Water Bottle' }, { label: 'Water Bottle' }, { label: 'Water Bottle' }]}
	/>
	<div class="gray-wrapper">
		<p class="result-label">Result</p>
		<BrewingStand
			ingredient={{ label: 'empty' }}
			potions={[
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' },
				{ label: 'Awkward Potion' }
			]}
		/>
	</div>
	<BrewingStand
		ingredient={{ label: 'Fermented Spider Eye' }}
		potions={[
			{ label: 'Awkward Potion' },
			{ label: 'Awkward Potion' },
			{ label: 'Awkward Potion' }
		]}
	/>
	<div class="gray-wrapper">
		<p class="result-label">Result</p>
		<BrewingStand
			ingredient={{ label: 'empty' }}
			potions={[{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }]}
		/>
	</div>
	<BrewingStand
		ingredient={{ label: 'Gunpowder' }}
		potions={[{ label: 'Weakness' }, { label: 'Weakness' }, { label: 'Weakness' }]}
	/>
	<div class="gray-wrapper">
		<p class="result-label">Result</p>
		<BrewingStand
			ingredient={{ label: 'empty' }}
			potions={[
				{ label: 'Splash Weakness' },
				{ label: 'Splash Weakness' },
				{ label: 'Splash Weakness' }
			]}
		/>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Step 3 — Craft a Golden Apple</h2>
	<p>
		This is the regular Golden Apple — 1 Apple surrounded by 8 Gold Ingots. Don't use an Enchanted
		Golden Apple; it looks similar but won't start the cure.
	</p>
	<CraftingTable
		items={[
			{ label: 'Gold Ingot' },
			{ label: 'Gold Ingot' },
			{ label: 'Gold Ingot' },
			{ label: 'Gold Ingot' },
			{ label: 'Apple' },
			{ label: 'Gold Ingot' },
			{ label: 'Gold Ingot' },
			{ label: 'Gold Ingot' },
			{ label: 'Gold Ingot' }
		]}
	/>
	<div class="info-note">
		<p>
			Look closely before you use it — the regular Golden Apple has a plain gold texture, while the
			Enchanted Golden Apple has a purple glow. Feeding the enchanted version to a zombie villager
			does nothing and wastes 8 gold ingots.
		</p>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Step 4 — Weaken it, then feed it</h2>
	<p>
		Throw the Splash Potion of Weakness so it hits the zombie villager — you'll see the Weakness
		effect swirl around it. While that effect is active, hold the Golden Apple and use it on the
		zombie villager. Red shaking particles confirm the cure has started.
	</p>

	<div class="divider"></div>

	<h2 class="section-title">Step 5 — Wait it out</h2>
	<p>
		The cure takes a random 3 to 5 minutes. Keep the zombie villager alive, lit, and away from
		sunlight the entire time — if it dies mid-cure, you lose it.
	</p>
	<div class="gray-container">
		<h2>Speed up the cure</h2>
		<p class="container-sub">
			Place these within about 9 blocks of the zombie villager while it converts:
		</p>
		<ul>
			<li>Iron Bars</li>
			<li>Beds</li>
		</ul>
	</div>

	<div class="divider"></div>

	<div class="info-note">
		<p>
			Once cured, the villager keeps its profession and job site, and permanently trades at a steep
			discount — sometimes as low as 1 item per emerald on trades that normally cost 20 or more.
		</p>
	</div>
</div>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
	.curing-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;

		.page-title {
			color: white;
			font-size: 2rem;
			line-height: 2.2rem;
			margin: 0;
		}

		.intro {
			color: lightgray;
			font-weight: bold;
			margin: 0;
		}

		.stat-row {
			display: flex;
			gap: 0.5rem;
			margin-top: 0.25rem;
		}

		.stat-card {
			flex: 1;
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 0.75rem;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			min-width: 0;
		}

		.stat-label {
			color: #8a8a8d;
			font-size: 0.7rem;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 0.04em;
			margin: 0;
		}

		.stat-value {
			color: white;
			font-size: 1rem;
			font-weight: bold;
			margin: 0;
		}

		.divider {
			height: 1px;
			background-color: #333336;
			margin: 0.25rem 0;
		}

		.section-title {
			color: white;
			font-size: 1.15rem;
			margin: 0 0 0.25rem;
		}

		p {
			color: #a8a8a8;
			font-weight: bold;
			font-size: 0.9rem;
			line-height: 1.5;
			margin: 0 0 0.25rem;
		}

		.gray-container {
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 1rem 1.1rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			h2 {
				color: white;
				font-size: 1.1rem;
				margin: 0;
			}
		}

		.container-sub {
			color: #a8a8a8;
			margin: 0;
		}

		ul {
			padding: 0;
			margin: 0;
			font-weight: bold;
			color: white;
			list-style-type: none;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			li {
				padding-left: 1rem;
				border-left: 2px solid #555;
			}
		}

		.gray-wrapper {
			background-color: #242427;
			border-radius: 1rem;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.result-label {
			color: #8a8a8d;
			font-size: 0.75rem;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			margin: 0;
		}

		.info-note {
			background-color: rgba(127, 0, 255, 0.12);
			border-left: 3px solid var(--secondary);
			border-radius: 0.5rem;
			padding: 0.85rem 1rem;
			margin: 0;

			p {
				color: whitesmoke;
				font-size: 0.85rem;
				margin: 0;
			}
		}
	}
</style>
