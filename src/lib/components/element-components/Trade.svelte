<script>
	import CraftingTable from '$lib/components/element-components/CraftingTable.svelte';

	let {
		title,
		intro,
		jobSiteName,
		jobSiteRecipe = [],
		professionName,
		give,
		receive,
		note
	} = $props();
</script>

<div class="trade-wrapper">
	<h1 class="page-title">{title}</h1>
	<p class="intro">{intro}</p>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">1</span>
			<h2 class="step-title">Craft a {jobSiteName}</h2>
		</div>
		<p class="step-text">
			A villager needs a {jobSiteName} nearby to become a {professionName}.
		</p>
		{#if jobSiteRecipe.length > 0}
			<CraftingTable items={jobSiteRecipe} />
		{/if}
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">2</span>
			<h2 class="step-title">Turn a villager into a {professionName}</h2>
		</div>
		<p class="step-text">
			Place the {jobSiteName} next to an unemployed villager. They'll automatically claim it as their
			job site and become a {professionName}.
		</p>
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">3</span>
			<h2 class="step-title">Trade {give?.label} for {receive?.label}</h2>
		</div>
		<p class="step-text">
			Right-click the {professionName} to open the trading menu. On the Novice level, one of their trades
			will let you exchange {give?.label} for {receive?.label}.
		</p>
		<div class="trade-ui">
			<div class="trade-slot">
				{#if give?.icon}
					<img src={give.icon} alt={give.label} class="trade-icon" />
				{/if}
				<p class="trade-name">{give?.label ?? ''}</p>
				{#if give?.amount}
					<p class="trade-amount">x{give.amount}</p>
				{/if}
			</div>
			<div class="trade-arrow">→</div>
			<div class="trade-slot receive-slot">
				{#if receive?.icon}
					<img src={receive.icon} alt={receive.label} class="trade-icon" />
				{/if}
				<p class="trade-name">{receive?.label ?? ''}</p>
				{#if receive?.amount}
					<p class="trade-amount">x{receive.amount}</p>
				{/if}
			</div>
		</div>
	</section>

	{#if note}
		<div class="divider"></div>
		<div class="info-note">
			<p>{note}</p>
		</div>
	{/if}
</div>

<style>
	.trade-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
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
		margin: 0 0 0.25rem;
	}

	.divider {
		height: 1px;
		background-color: #333336;
		margin: 0.5rem 0;
	}

	.step-section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.step-header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.step-number {
		width: 24px;
		height: 24px;
		flex-shrink: 0;
		border-radius: 0.5rem;
		background-color: var(--secondary);
		color: white;
		font-size: 0.8rem;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step-title {
		color: white;
		font-size: 1.15rem;
		margin: 0;
	}

	.step-text {
		color: #a8a8a8;
		font-weight: bold;
		font-size: 0.9rem;
		margin: 0 0 0.25rem;
	}

	.trade-ui {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background-color: #242427;
		border: 1px solid #3a3a3d;
		border-radius: 1rem;
		padding: 1rem;
	}

	.trade-slot {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		background-color: #1a1a1c;
		border: 1px solid #3a3a3d;
		border-radius: 0.75rem;
		aspect-ratio: 1 / 1;
		padding: 0.75rem;
		min-width: 0;
	}

	.trade-icon {
		width: 32px;
		height: 32px;
	}

	.trade-name {
		color: white;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: center;
		margin: 0;
	}

	.trade-amount {
		color: #8a8a8d;
		font-weight: bold;
		font-size: 0.75rem;
		margin: 0;
	}

	.trade-arrow {
		color: #6a6a6d;
		font-size: 1.3rem;
		flex-shrink: 0;
	}

	.receive-slot {
		border-color: var(--secondary);
	}

	.info-note {
		background-color: rgba(127, 0, 255, 0.12);
		border-left: 3px solid var(--secondary);
		border-radius: 0.5rem;
		padding: 0.75rem 1rem;
		margin: 0;
	}

	.info-note p {
		color: whitesmoke;
		font-size: 0.85rem;
		font-weight: bold;
		margin: 0;
		line-height: 1.4;
	}
</style>
