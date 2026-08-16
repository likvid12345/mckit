<script>
	import BrewingStand from '$lib/components/element-components/BrewingStand.svelte';

	let { name, intro, steps = [] } = $props();
</script>

<div class="potion-wrapper">
	<h1 class="page-title">{name}</h1>
	<p class="intro">{intro}</p>

	<div class="divider"></div>

	{#each steps as step, i (i)}
		{#if step.sectionLabel}
			<p class="section-label">{step.sectionLabel}</p>
		{/if}

		<section class="step-section">
			<div class="step-header">
				<span class="step-number">{step.number}</span>
				<h2 class="step-title">{step.title}</h2>
			</div>
			<p class="step-text">{step.text}</p>

			{#if step.infoNote}
				<div class="info-note">
					<p>{step.infoNote}</p>
				</div>
			{/if}

			<BrewingStand ingredient={step.ingredient} potions={step.potions} />

			<div class="gray-wrapper">
				<p class="result-label">Result</p>
				<BrewingStand ingredient={{ label: 'empty' }} potions={step.resultPotions} />
			</div>
		</section>

		{#if i < steps.length - 1}
			<div class="divider"></div>
		{/if}
	{/each}
</div>

<style>
	.potion-wrapper {
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

	.section-label {
		color: #6a6a6d;
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin: 0;
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
