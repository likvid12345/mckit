<script>
	import BrewingStand from '$lib/components/element-components/BrewingStand.svelte';
</script>

<div class="regeneration-wrapper">
	<h1 class="page-title">Regeneration</h1>
	<p class="intro">Regenerates your health over time</p>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">1</span>
			<h2 class="step-title">Brew an Awkward Potion</h2>
		</div>
		<p class="step-text">Add Nether Wart to 3 Water Bottles to get 3 Awkward Potions.</p>
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
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">2</span>
			<h2 class="step-title">Add Ghast Tear</h2>
		</div>
		<p class="step-text">Add a Ghast Tear to your Awkward Potions to brew Regeneration.</p>
		<BrewingStand
			ingredient={{ label: 'Ghast Tear' }}
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
				potions={[
					{ label: 'Regeneration I' },
					{ label: 'Regeneration I' },
					{ label: 'Regeneration I' }
				]}
			/>
		</div>
	</section>

	<div class="divider"></div>

	<p class="section-label">Optional upgrades</p>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">3</span>
			<h2 class="step-title">Upgrade to Regeneration II</h2>
		</div>
		<p class="step-text">
			Add Glowstone Dust to your Regeneration I potions to upgrade them to a stronger, shorter
			Regeneration II.
		</p>
		<BrewingStand
			ingredient={{ label: 'Glowstone Dust' }}
			potions={[
				{ label: 'Regeneration I' },
				{ label: 'Regeneration I' },
				{ label: 'Regeneration I' }
			]}
		/>
		<div class="gray-wrapper">
			<p class="result-label">Result</p>
			<BrewingStand
				ingredient={{ label: 'empty' }}
				potions={[
					{ label: 'Regeneration II' },
					{ label: 'Regeneration II' },
					{ label: 'Regeneration II' }
				]}
			/>
		</div>
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">4</span>
			<h2 class="step-title">Make it a Splash Potion</h2>
		</div>
		<p class="step-text">
			Add Gunpowder to any Regeneration potion to turn it into a throwable Splash Potion.
		</p>
		<BrewingStand
			ingredient={{ label: 'Gunpowder' }}
			potions={[{ label: 'Regeneration' }, { label: 'Regeneration' }, { label: 'Regeneration' }]}
		/>
		<div class="gray-wrapper">
			<p class="result-label">Result</p>
			<BrewingStand
				ingredient={{ label: 'empty' }}
				potions={[
					{ label: 'Splash Regeneration' },
					{ label: 'Splash Regeneration' },
					{ label: 'Splash Regeneration' }
				]}
			/>
		</div>
	</section>

	<div class="divider"></div>

	<section class="step-section">
		<div class="step-header">
			<span class="step-number">5</span>
			<h2 class="step-title">Make it a Lingering Potion</h2>
		</div>
		<p class="step-text">
			Add Dragon's Breath to a Splash Potion to turn it into a Lingering Potion, which leaves a gas
			cloud that affects anyone who walks through it.
		</p>
		<div class="info-note">
			<p>
				Dragon's Breath can only be obtained by holding an empty Glass Bottle while fighting the
				Ender Dragon — it captures the dragon's breath attack clouds during the fight.
			</p>
		</div>
		<BrewingStand
			ingredient={{ label: "Dragon's Breath" }}
			potions={[
				{ label: 'Splash Regeneration' },
				{ label: 'Splash Regeneration' },
				{ label: 'Splash Regeneration' }
			]}
		/>
		<div class="gray-wrapper">
			<p class="result-label">Result</p>
			<BrewingStand
				ingredient={{ label: 'empty' }}
				potions={[
					{ label: 'Lingering Regeneration' },
					{ label: 'Lingering Regeneration' },
					{ label: 'Lingering Regeneration' }
				]}
			/>
		</div>
	</section>
</div>

<style>
	.regeneration-wrapper {
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
