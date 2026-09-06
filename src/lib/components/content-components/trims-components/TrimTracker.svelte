<script>
	import Footer from '$lib/components/element-components/Footer.svelte';
	import AdSlot from '$lib/components/element-components/AdSlot.svelte';

	import { onMount } from 'svelte';
	import { Preferences } from '@capacitor/preferences';

	import sentry from '$lib/assets/trims/sentry.svg';
	import dune from '$lib/assets/trims/dune.svg';
	import coast from '$lib/assets/trims/coast.svg';
	import wild from '$lib/assets/trims/wild.svg';
	import ward from '$lib/assets/trims/ward.svg';
	import silence from '$lib/assets/trims/silence.svg';
	import eye from '$lib/assets/trims/eye.svg';
	import vex from '$lib/assets/trims/vex.svg';
	import tide from '$lib/assets/trims/tide.svg';
	import snout from '$lib/assets/trims/snout.svg';
	import rib from '$lib/assets/trims/rib.svg';
	import spire from '$lib/assets/trims/spire.svg';
	import wayfinder from '$lib/assets/trims/wayfinder.svg';
	import shaper from '$lib/assets/trims/shaper.svg';
	import raiser from '$lib/assets/trims/raiser.svg';
	import host from '$lib/assets/trims/host.svg';
	import flow from '$lib/assets/trims/flow.svg';
	import bolt from '$lib/assets/trims/bolt.svg';

	const TRACKER_KEY = 'armor_trim_tracker';

	let collectedTrims = $state(new Set());
	let loaded = $state(false);

	let trims = [
		['Sentry', sentry],
		['Vex', vex],
		['Wild', wild],
		['Coast', coast],
		['Dune', dune],
		['Wayfinder', wayfinder],
		['Raiser', raiser],
		['Shaper', shaper],
		['Host', host],
		['Ward', ward],
		['Silence', silence],
		['Tide', tide],
		['Snout', snout],
		['Rib', rib],
		['Eye', eye],
		['Spire', spire],
		['Flow', flow],
		['Bolt', bolt]
	];

	onMount(async () => {
		try {
			const saved = await Preferences.get({
				key: TRACKER_KEY
			});

			if (saved.value) {
				collectedTrims = new Set(JSON.parse(saved.value));
			}
		} catch (e) {
			console.error('Failed to load trim tracker state', e);
		}

		loaded = true;
	});

	$effect(() => {
		if (!loaded) return;

		Preferences.set({
			key: TRACKER_KEY,
			value: JSON.stringify([...collectedTrims])
		});
	});

	function toggleTrim(trim) {
		if (collectedTrims.has(trim)) {
			collectedTrims.delete(trim);
		} else {
			collectedTrims.add(trim);
		}

		collectedTrims = new Set(collectedTrims);
	}

	function resetTracker() {
		collectedTrims = new Set();
	}

	let collectedCount = $derived(collectedTrims.size);
	let totalCount = $derived(trims.length);
	let progress = $derived(Math.round((collectedCount / totalCount) * 100));
</script>

<div class="tracker-wrapper">
	<div class="tracker-header">
		<div>
			<h1 class="page-title">Trim Tracker</h1>
			<p class="intro">Track the armor trims you have collected.</p>
		</div>

		{#if collectedCount > 0}
			<button class="reset-button" onclick={resetTracker}> Reset </button>
		{/if}
	</div>

	<div class="progress-container">
		<div class="progress-info">
			<span>Collected</span>
			<span>{collectedCount} / {totalCount}</span>
		</div>

		<div class="progress-bar">
			<div class="progress-fill" style={`width: ${progress}%`}></div>
		</div>

		<p class="progress-percent">{progress}% complete</p>
	</div>

	<div class="trim-grid">
		{#each trims as [trim, image] (trim)}
			<button
				class="trim-card"
				class:collected={collectedTrims.has(trim)}
				onclick={() => toggleTrim(trim)}
			>
				<div class="trim-image-wrapper">
					<img class="trim-image" src={image} alt={trim} />

					{#if collectedTrims.has(trim)}
						<span class="checkmark">✓</span>
					{/if}
				</div>

				<span class="trim-name">{trim}</span>
			</button>
		{/each}
	</div>
</div>

<AdSlot />
<Footer />

<div class="separator"></div>

<style>
	.tracker-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
	}

	.tracker-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.5rem;
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
		margin: 0.25rem 0 0;
		font-size: 0.9rem;
	}

	.reset-button {
		background-color: transparent;
		border: 1px solid #3a3a3d;
		border-radius: 0.5rem;
		padding: 0.3rem 0.7rem;
		color: #8a8a8d;
		font-weight: bold;
		font-size: 0.75rem;
		cursor: pointer;
		flex-shrink: 0;
	}

	.progress-container {
		background-color: #242427;
		border-radius: 0.75rem;
		padding: 0.85rem 1rem;
		margin-bottom: 0.5rem;
	}

	.progress-info {
		display: flex;
		justify-content: space-between;
		color: white;
		font-size: 0.85rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.progress-info span:last-child {
		color: var(--secondary);
	}

	.progress-bar {
		width: 100%;
		height: 7px;
		background-color: #1a1a1c;
		border-radius: 999px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background-color: var(--secondary);
		border-radius: 999px;
		transition: width 0.2s ease;
	}

	.progress-percent {
		color: #8a8a8d;
		font-size: 0.7rem;
		font-weight: bold;
		margin: 0.45rem 0 0;
		text-align: right;
	}

	.trim-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.6rem;
	}

	.trim-card {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background-color: #242427;
		border: 1px solid #3a3a3d;
		border-radius: 0.75rem;
		padding: 0.7rem;
		cursor: pointer;
		text-align: left;
		transition:
			background-color 0.15s ease,
			border-color 0.15s ease;
	}

	.trim-card:hover {
		border-color: #55555a;
	}

	.trim-card.collected {
		border-color: var(--secondary);
	}

	.trim-image-wrapper {
		position: relative;
		flex-shrink: 0;
		width: 42px;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #1a1a1c;
		border-radius: 0.5rem;
	}

	.trim-image {
		width: 30px;
		height: 30px;
		object-fit: contain;
	}

	.checkmark {
		position: absolute;
		right: -5px;
		top: -5px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: var(--secondary);
		color: white;
		font-size: 0.65rem;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.trim-name {
		color: white;
		font-size: 0.85rem;
		font-weight: bold;
	}

	.trim-card.collected .trim-name {
		color: var(--secondary);
	}

	.separator {
		height: 100px;
	}

	@media (min-width: 600px) {
		.trim-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 900px) {
		.trim-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
