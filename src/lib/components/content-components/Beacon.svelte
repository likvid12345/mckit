<script>
	import CraftingTable from '$lib/components/element-components/CraftingTable.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	const gridCells = Array.from({ length: 81 }, (_, i) => {
		const x = i % 9;
		const y = Math.floor(i / 9);
		const dist = Math.max(Math.abs(x - 4), Math.abs(y - 4));
		return dist;
	});

	const pyramidLevels = [
		{ level: 1, layers: '3x3', blocks: 9, range: 20, power: 'Speed or Haste' },
		{ level: 2, layers: '3x3 + 5x5', blocks: 34, range: 30, power: '+ Resistance or Jump Boost' },
		{ level: 3, layers: '3x3 + 5x5 + 7x7', blocks: 83, range: 40, power: '+ Strength' },
		{
			level: 4,
			layers: '3x3 + 5x5 + 7x7 + 9x9',
			blocks: 164,
			range: 50,
			power: '+ Regeneration (or Level II)'
		}
	];
</script>

<div class="beacon-wrapper">
	<h1 class="page-title">Beacon Guide</h1>
	<p class="intro">This is the simplest beacon guide ever. Let's dive right into it.</p>

	<div class="stat-row">
		<div class="stat-card">
			<p class="stat-label">Max Range</p>
			<p class="stat-value">50 blocks</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Max Effects</p>
			<p class="stat-value">2 at once</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Full Pyramid</p>
			<p class="stat-value">164 blocks</p>
		</div>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">What is a beacon?</h2>
	<p>
		A beacon is a block that sits on top of a pyramid of mineral blocks and beams status effects to
		every player standing in range — permanent Speed, Haste, Resistance, Jump Boost, Strength, or
		Regeneration, for as long as you stay close.
	</p>

	<div class="gray-container">
		<h2>Two parts make a working beacon</h2>
		<ul>
			<li>The beacon block itself — crafted once</li>
			<li>A pyramid underneath it — built from mineral blocks, 1 to 4 layers tall</li>
		</ul>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Crafting the beacon</h2>
	<p>You only need to craft this once — the pyramid is what actually costs resources.</p>
	<CraftingTable
		items={[
			{ label: 'Glass' },
			{ label: 'Glass' },
			{ label: 'Glass' },
			{ label: 'Glass' },
			{ label: 'Nether Star' },
			{ label: 'Glass' },
			{ label: 'Obsidian' },
			{ label: 'Obsidian' },
			{ label: 'Obsidian' }
		]}
	/>

	<div class="divider"></div>

	<h2 class="section-title">Getting the Nether Star</h2>
	<p>
		The Nether Star only drops from the Wither — one of two boss mobs in the game. Spawning it takes
		a bit of setup:
	</p>
	<div class="gray-container">
		<ul>
			<li>Place 4 Soul Sand (or Soul Soil) blocks in a T-shape</li>
			<li>Place 3 Wither Skeleton Skulls on top of the T</li>
			<li>The Wither spawns and explodes the moment the last skull is placed</li>
		</ul>
	</div>
	<div class="info-note">
		<p>
			Wither Skeleton Skulls only drop from Wither Skeletons in Nether Fortresses, and the drop rate
			is low — expect to farm for a while before you have 3.
		</p>
	</div>

	<div class="divider"></div>
	<p class="container-sub">Skull drop chance by Looting level:</p>
	<div class="loot-table">
		<div class="loot-row">
			<p class="loot-label">No Looting</p>
			<p class="loot-value">2.5%</p>
		</div>
		<div class="loot-row">
			<p class="loot-label">Looting I</p>
			<p class="loot-value">3.5%</p>
		</div>
		<div class="loot-row">
			<p class="loot-label">Looting II</p>
			<p class="loot-value">4.5%</p>
		</div>
		<div class="loot-row">
			<p class="loot-label">Looting III</p>
			<p class="loot-value">5.5%</p>
		</div>
	</div>
	<div class="info-note">
		<p>
			Use a sword with Looting III when farming Wither Skeletons — it nets the highest skull drop
			chance and cuts your farming time roughly in half compared to an unenchanted weapon. Expect
			around 20 kills per skull on average with Looting III, versus around 40 without it.
		</p>
	</div>
	<div class="divider"></div>

	<h2 class="section-title">The pyramid, top-down</h2>
	<p>
		Each ring below is one layer of the pyramid, seen from above. The beacon sits on the smallest
		square, in the center.
	</p>
	<div class="pyramid-grid">
		{#each gridCells as dist, i (i)}
			<div class="pyramid-cell ring-{dist}"></div>
		{/each}
	</div>
	<div class="legend-row">
		<div class="legend-item"><span class="legend-swatch ring-0"></span>3x3</div>
		<div class="legend-item"><span class="legend-swatch ring-2"></span>5x5</div>
		<div class="legend-item"><span class="legend-swatch ring-3"></span>7x7</div>
		<div class="legend-item"><span class="legend-swatch ring-4"></span>9x9</div>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Materials per level</h2>
	<p>Every layer stacks on top of the ones below it — you can't skip a layer.</p>
	<div class="level-table">
		{#each pyramidLevels as lvl (lvl.level)}
			<div class="level-row">
				<div class="level-badge">L{lvl.level}</div>
				<div class="level-info">
					<p class="level-layers">{lvl.layers}</p>
					<p class="level-sub">{lvl.blocks} blocks · {lvl.range} block range · {lvl.power}</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="info-note">
		<p>
			Each mineral block costs 9 ingots or gems to craft, so a full Level 4 pyramid needs 1,476 Iron
			Ingots, Gold Ingots, Emeralds, Diamonds, or Netherite Ingots — you can freely mix block types
			across and within layers.
		</p>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Valid pyramid blocks</h2>
	<div class="gray-container">
		<ul>
			<li>Iron Block</li>
			<li>Gold Block</li>
			<li>Emerald Block</li>
			<li>Diamond Block</li>
			<li>Netherite Block</li>
		</ul>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Powering up the beacon</h2>
	<p>
		A built pyramid alone doesn't do anything — you still need to open the beacon and feed it a
		payment item to activate your chosen effect.
	</p>
	<div class="gray-container">
		<h2>Steps to activate</h2>
		<ul>
			<li>Right-click the beacon to open its menu</li>
			<li>
				Place 1 Iron Ingot, Gold Ingot, Diamond, Emerald, or Netherite Ingot in the payment slot
			</li>
			<li>Pick your primary power (and secondary, at Level 4)</li>
			<li>
				Confirm — the effect activates instantly and refreshes every 4 seconds while you're in range
			</li>
		</ul>
	</div>
	<div class="info-note">
		<p>
			The payment item is consumed every time you activate or change a power — even switching from
			Speed to Haste costs another ingot. The item type doesn't matter; Iron Ingot works exactly as
			well as Netherite Ingot, so there's no reason to spend anything fancier than iron.
		</p>
	</div>
	<div class="divider"></div>

	<h2 class="section-title">Available power ups</h2>
	<p>Which effects you can pick depends on how tall your pyramid is.</p>
	<div class="gray-container">
		<ul>
			<li>Level 1 — Speed or Haste</li>
			<li>Level 2 — adds Resistance or Jump Boost</li>
			<li>Level 3 — adds Strength</li>
			<li>Level 4 — pick Regeneration as a second effect, or double your main effect instead</li>
		</ul>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Widening the pyramid</h2>
	<p>
		A single beacon can't go past Level 4 — the range and effects cap out at 50 blocks no matter how
		much bigger you build the base. But multiple beacons can share one pyramid, since neighboring
		beacons are allowed to sit on the same layer of blocks.
	</p>
	<div class="gray-container">
		<h2>Mega Beacon (6-beacon setup)</h2>
		<p class="container-sub">
			Placing 6 beacons in a 2x3 grid on one shared pyramid lets you run all 6 effects at once —
			Speed, Haste, Resistance, Jump Boost, Strength, and Regeneration, active at the same time.
		</p>
		<ul>
			<li>Base layer: 10x11 blocks</li>
			<li>Total cost: 244 blocks</li>
			<li>Compare that to 6 separate Level 4 pyramids: 984 blocks</li>
		</ul>
	</div>
	<div class="info-note">
		<p>
			Combined pyramids don't need to be symmetrical — you can share blocks between as few or as
			many beacons as you want, as long as every beacon still sits on a complete pyramid beneath it.
		</p>
	</div>
</div>
<Footer />

<style>
	.beacon-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		padding: 1rem;

		.page-title {
			color: white;
			font-size: 2rem;
			line-height: 2.2rem;
			padding: 0;
			margin: 0;
		}

		.intro {
			padding: 0;
			margin: 0;
			font-weight: bold;
			color: lightgray;
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
			font-size: 1.35rem;
			line-height: 1.6rem;
			padding: 0;
			margin: 0 0 0.25rem;
		}

		p {
			padding: 0;
			margin: 0;
			font-weight: bold;
			color: lightgray;
			line-height: 1.5;
		}

		.container-sub {
			color: #a8a8a8;
			margin-bottom: 0.5rem;
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

		.gray-container {
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 1rem 1.25rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			h2 {
				color: white;
				font-size: 1.1rem;
				padding: 0;
				margin: 0;
			}
		}

		.pyramid-grid {
			display: grid;
			grid-template-columns: repeat(9, 1fr);
			gap: 3px;
			width: 100%;
			margin: 0.5rem auto 0;
			aspect-ratio: 1 / 1;
		}

		.pyramid-cell {
			aspect-ratio: 1 / 1;
			border-radius: 2px;
		}

		.ring-0 {
			background-color: #f5f5f5;
		}

		.ring-1 {
			background-color: #f5f5f5;
		}

		.ring-2 {
			background-color: #b5b5b8;
		}

		.ring-3 {
			background-color: #75757a;
		}

		.ring-4 {
			background-color: #45454a;
		}

		.legend-row {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5rem 1rem;
			margin-top: 0.6rem;
		}

		.legend-item {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			color: #a8a8a8;
			font-size: 0.75rem;
			font-weight: bold;
		}

		.legend-swatch {
			width: 10px;
			height: 10px;
			border-radius: 2px;
			display: inline-block;
			flex-shrink: 0;
		}
		.level-table {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.level-row {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 0.75rem 1rem;
		}

		.level-badge {
			width: 34px;
			height: 34px;
			flex-shrink: 0;
			border-radius: 0.6rem;
			background-color: var(--secondary);
			color: white;
			font-weight: bold;
			font-size: 0.85rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.level-info {
			display: flex;
			flex-direction: column;
			gap: 0.15rem;
			min-width: 0;
		}

		.level-layers {
			color: white;
			font-size: 0.95rem;
			font-weight: bold;
			margin: 0;
		}

		.level-sub {
			color: #8a8a8d;
			font-size: 0.78rem;
			font-weight: bold;
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
			}
		}
		.loot-table {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}

		.loot-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #242427;
			border-radius: 0.6rem;
			padding: 0.6rem 0.9rem;
		}

		.loot-label {
			color: white;
			font-size: 0.9rem;
			font-weight: bold;
			margin: 0;
		}

		.loot-value {
			color: var(--secondary);
			font-size: 0.9rem;
			font-weight: bold;
			margin: 0;
		}
	}
</style>
