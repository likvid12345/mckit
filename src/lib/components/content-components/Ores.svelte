<script>
	import Button from '$lib/components/element-components/Button.svelte';

	let selectedOre = $state('Coal');
	let sortableOres = $state([
		'Coal',
		'Copper',
		'Iron',
		'Gold',
		'Amethyst',
		'Lapis',
		'Redstone',
		'Diamond',
		'Emerald',
		'Quartz',
		'Nether Gold',
		'Ancient Debris'
	]);
</script>

<div class="general-sorter">
	{#each sortableOres as ore, i (i)}
		<Button
			class={selectedOre === ore ? 'selected-button' : ''}
			onclick={() => {
				selectedOre = ore;
			}}>{ore}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedOre == 'Coal'}
		<div class="ore-wrapper">
			<h1 class="page-title">Coal</h1>
			<p class="intro">One of the most common and useful resources in the game.</p>

			<div class="stat-row">
				<div class="stat-card">
					<p class="stat-label">Found at</p>
					<p class="stat-value">Y=0 to Y=320</p>
				</div>
				<div class="stat-card">
					<p class="stat-label">Best height</p>
					<p class="stat-value">Y=96</p>
				</div>
				<div class="stat-card">
					<p class="stat-label">Min tool</p>
					<p class="stat-value">Wooden Pickaxe</p>
				</div>
			</div>

			<div class="divider"></div>

			<h2 class="section-title">Where to find it</h2>
			<p class="step-text">
				Coal generates at almost every height and is one of the most common ores in the game. It's
				often visible right on the surface of mountains and cave walls, so you don't need to mine
				deep to find it.
			</p>

			<div class="biome-row">
				<div class="biome-card">
					<p class="biome-name">Windswept Hills</p>
					<p class="biome-desc">Exposed stone cliffs make coal easy to spot without mining</p>
				</div>
				<div class="biome-card">
					<p class="biome-name">Mountains</p>
					<p class="biome-desc">Tall peaks expose ore veins across a huge height range</p>
				</div>
			</div>

			<div class="divider"></div>

			<h2 class="section-title">Best enchantment</h2>
			<div class="enchant-highlight">
				<span class="enchant-badge">Fortune</span>
				<p class="step-text">
					Increases how much coal drops per block. Silk Touch works too, but isn't very useful here
					since coal already drops as an item without needing to be smelted.
				</p>
			</div>

			<div class="fortune-row">
				<div class="fortune-card">
					<p class="fortune-label">No Fortune</p>
					<p class="fortune-value">1</p>
				</div>
				<div class="fortune-card">
					<p class="fortune-label">Fortune I</p>
					<p class="fortune-value">1–2</p>
				</div>
				<div class="fortune-card">
					<p class="fortune-label">Fortune II</p>
					<p class="fortune-value">1–3</p>
				</div>
				<div class="fortune-card">
					<p class="fortune-label">Fortune III</p>
					<p class="fortune-value">1–4</p>
				</div>
			</div>

			<div class="divider"></div>

			<h2 class="section-title">What it's used for</h2>
			<div class="gray-wrapper">
				<ul class="use-list">
					<li>Torches</li>
					<li>Furnace and Blast Furnace fuel — smelts up to 8 items</li>
					<li>Campfires</li>
					<li>Fire Charges</li>
					<li>Trading with Fisherman villagers</li>
					<li>Block of Coal — compact storage, stronger fuel</li>
				</ul>
			</div>

			<div class="divider"></div>

			<div class="info-note">
				<p>
					No Coal yet? Smelt any log or wood in a furnace to get Charcoal — it works as a substitute
					in almost every recipe.
				</p>
			</div>
		</div>

		<style>
			.ore-wrapper {
				display: flex;
				flex-direction: column;
				gap: 0.85rem;
				padding: 1rem;
			}

			.page-title {
				color: white;
				font-size: 2rem;
				line-height: 2.2rem;
				margin: 0;
			}

			.intro {
				color: lightgray;
				font-weight: bold;
				font-size: 1rem;
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
				font-size: 1.3rem;
				margin: 0 0 0.35rem;
			}

			.step-text {
				color: #b5b5b5;
				font-weight: 600;
				font-size: 1rem;
				margin: 0;
				line-height: 1.6;
			}

			.biome-row {
				display: flex;
				gap: 0.5rem;
				margin-top: 0.6rem;
			}

			.biome-card {
				flex: 1;
				background-color: #242427;
				border-radius: 0.75rem;
				padding: 0.85rem;
				min-width: 0;
			}

			.biome-name {
				color: var(--secondary);
				font-size: 0.95rem;
				font-weight: bold;
				margin: 0 0 0.25rem;
			}

			.biome-desc {
				color: #a8a8a8;
				font-size: 0.8rem;
				font-weight: 600;
				margin: 0;
				line-height: 1.4;
			}

			.enchant-highlight {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}

			.enchant-badge {
				align-self: flex-start;
				background-color: rgba(127, 0, 255, 0.15);
				color: var(--secondary);
				font-size: 0.9rem;
				font-weight: bold;
				padding: 0.3rem 0.9rem;
				border-radius: 999px;
			}

			.fortune-row {
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
				margin-top: 0.6rem;
			}

			.fortune-card {
				flex: 1 1 calc(50% - 0.25rem);
				background-color: #242427;
				border-radius: 0.75rem;
				padding: 0.75rem;
				text-align: center;
				min-width: 0;
			}
			.fortune-label {
				color: #8a8a8d;
				font-size: 0.7rem;
				font-weight: bold;
				text-transform: uppercase;
				letter-spacing: 0.03em;
				margin: 0 0 0.3rem;
			}

			.fortune-value {
				color: white;
				font-size: 1.2rem;
				font-weight: bold;
				margin: 0;
			}

			.gray-wrapper {
				background-color: #242427;
				border-radius: 1rem;
				padding: 1.1rem;
			}

			.use-list {
				list-style-type: none;
				padding: 0;
				margin: 0;
				display: flex;
				flex-direction: column;
				gap: 0.65rem;
			}

			.use-list li {
				color: white;
				font-weight: bold;
				font-size: 1rem;
				padding-left: 1rem;
				border-left: 2px solid #555;
			}

			.info-note {
				background-color: rgba(127, 0, 255, 0.12);
				border-left: 3px solid var(--secondary);
				border-radius: 0.5rem;
				padding: 0.85rem 1rem;
				margin: 0;
			}

			.info-note p {
				color: whitesmoke;
				font-size: 0.9rem;
				font-weight: bold;
				margin: 0;
				line-height: 1.5;
			}
		</style>
	{:else if selectedOre == 'Copper'}
		<p>Copper</p>
	{:else if selectedOre == 'Iron'}
		<p>Iron</p>
	{:else if selectedOre == 'Gold'}
		<p>Gold</p>
	{:else if selectedOre == 'Amethyst'}
		<p>Amethyst</p>
	{:else if selectedOre == 'Lapis'}
		<p>Lapis</p>
	{:else if selectedOre == 'Redstone'}
		<p>Redstone</p>
	{:else if selectedOre == 'Diamond'}
		<p>Diamond</p>
	{:else if selectedOre == 'Emerald'}
		<p>Emerald</p>
	{:else if selectedOre == 'Quartz'}
		<p>Quartz</p>
	{:else if selectedOre == 'Nether Gold'}
		<p>Nether Gold</p>
	{:else if selectedOre == 'Ancient Debris'}
		<p>Ancient Debris</p>
	{/if}
</div>
