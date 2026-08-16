<script>
	import CraftingTable from '$lib/components/element-components/CraftingTable.svelte';

	let {
		name,
		intro,
		rarity,
		structure,
		dropChance,
		duplicateMaterial,
		colorNote,
		locateTitle = 'How to find the structure',
		locateText,
		whereTitle = 'Where the chest is',
		whereText,
		duplicateTitle = 'How to duplicate it',
		duplicateText,
		applyTitle = 'How to apply it',
		applyText,
		resultLabel = 'Result'
	} = $props();
</script>

<div class="trim-wrapper">
	<h1 class="page-title">{name}</h1>
	<p class="intro">{intro}</p>

	<div class="stat-row">
		<div class="stat-card">
			<p class="stat-label">Rarity</p>
			<p class="stat-value">{rarity}</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Found in</p>
			<p class="stat-value">{structure}</p>
		</div>
		<div class="stat-card">
			<p class="stat-label">Drop chance</p>
			<p class="stat-value">{dropChance}</p>
		</div>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">{locateTitle}</h2>
	<p class="step-text">{locateText}</p>

	<div class="divider"></div>

	<h2 class="section-title">{whereTitle}</h2>
	<p class="step-text">{whereText}</p>

	<div class="divider"></div>

	<h2 class="section-title">{duplicateTitle}</h2>
	<p class="step-text">{duplicateText}</p>
	<CraftingTable
		items={[
			{ label: 'Diamond' },
			{ label: duplicateMaterial },
			{ label: 'Diamond' },
			{ label: 'Diamond' },
			{ label: name + ' Template' },
			{ label: 'Diamond' },
			{ label: 'Diamond' },
			{ label: 'Diamond' },
			{ label: 'Diamond' }
		]}
	/>
	<div class="gray-wrapper">
		<p class="result-label">{resultLabel}</p>
		<CraftingTable
			items={[
				{ label: '' },
				{ label: '' },
				{ label: '' },
				{ label: '' },
				{ label: name + ' Template x2' },
				{ label: '' },
				{ label: '' },
				{ label: '' },
				{ label: '' }
			]}
		/>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">{applyTitle}</h2>
	<p class="step-text">{applyText}</p>

	{#if colorNote}
		<div class="info-note">
			<p>{colorNote}</p>
		</div>
	{/if}
</div>

<style>
	.trim-wrapper {
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

	.gray-wrapper {
		background-color: #242427;
		border-radius: 1rem;
		padding: 1.1rem;
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
	}

	.info-note p {
		color: whitesmoke;
		font-size: 0.9rem;
		font-weight: bold;
		margin: 0;
		line-height: 1.5;
	}
</style>
