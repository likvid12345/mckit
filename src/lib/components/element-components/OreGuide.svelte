<script>
	let {
		name,
		intro,
		foundAt,
		bestHeight,
		minTool,
		biomes = [],
		enchantName,
		enchantDesc,
		fortuneLevels = [],
		uses = [],
		note
	} = $props();
</script>

<div class="ore-wrapper">
	<h1 class="page-title">{name}</h1>
	<p class="intro">{intro}</p>

	<div class="stat-row">
		<div class="stat-card">
			<p class="stat-label">Found at</p>
			<p class="stat-value">{foundAt}</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Best height</p>
			<p class="stat-value">{bestHeight}</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Min tool</p>
			<p class="stat-value">{minTool}</p>
		</div>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Where to find it</h2>
	{#if biomes.length > 0}
		<div class="biome-row">
			{#each biomes as biome, i (i)}
				<div class="biome-card">
					<p class="biome-name">{biome.name}</p>
					<p class="biome-desc">{biome.desc}</p>
				</div>
			{/each}
		</div>
	{/if}

	<div class="divider"></div>

	<h2 class="section-title">Best enchantment</h2>
	<div class="enchant-highlight">
		<span class="enchant-badge">{enchantName}</span>
		<p class="step-text">{enchantDesc}</p>
	</div>

	{#if fortuneLevels.length > 0}
		<div class="fortune-row">
			{#each fortuneLevels as level, i (i)}
				<div class="fortune-card">
					<p class="fortune-label">{level.label}</p>
					<p class="fortune-value">{level.value}</p>
				</div>
			{/each}
		</div>
	{/if}

	<div class="divider"></div>

	<h2 class="section-title">What it's used for</h2>
	<div class="gray-wrapper">
		<ul class="use-list">
			{#each uses as use, i (i)}
				<li>{use}</li>
			{/each}
		</ul>
	</div>

	{#if note}
		<div class="divider"></div>
		<div class="info-note">
			<p>{note}</p>
		</div>
	{/if}
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
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.6rem;
	}

	.biome-card {
		flex: 1 1 calc(50% - 0.25rem);
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
