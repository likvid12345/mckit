<script>
	import { onMount } from 'svelte';
	import { Preferences } from '@capacitor/preferences';

	import Footer from '../element-components/Footer.svelte';

	let { sections = [] } = $props();

	const SELECTED_KEY = 'total_table_selected';
	const COMPLETED_KEY = 'total_table_completed';

	let selected = $state(new Set());
	let completedCounts = $state({});
	let loaded = $state(false);

	onMount(async () => {
		try {
			const savedSelected = await Preferences.get({ key: SELECTED_KEY });
			if (savedSelected.value) {
				selected = new Set(JSON.parse(savedSelected.value));
			}
			const savedCompleted = await Preferences.get({ key: COMPLETED_KEY });
			if (savedCompleted.value) {
				completedCounts = JSON.parse(savedCompleted.value);
			}
		} catch (e) {
			console.error('Failed to load saved state', e);
		}
		loaded = true;
	});

	$effect(() => {
		if (!loaded) return;
		Preferences.set({ key: SELECTED_KEY, value: JSON.stringify([...selected]) });
	});

	$effect(() => {
		if (!loaded) return;
		Preferences.set({ key: COMPLETED_KEY, value: JSON.stringify(completedCounts) });
	});

	function toggleItem(title) {
		if (selected.has(title)) {
			selected.delete(title);
		} else {
			selected.add(title);
		}
		selected = new Set(selected);
	}

	function markOneComplete(enchant, total) {
		const current = completedCounts[enchant] ?? 0;
		if (current >= total) return;
		completedCounts = { ...completedCounts, [enchant]: current + 1 };
	}

	function unmarkOneComplete(enchant) {
		const current = completedCounts[enchant] ?? 0;
		if (current <= 0) return;
		const next = current - 1;
		const updated = { ...completedCounts };
		if (next <= 0) {
			delete updated[enchant];
		} else {
			updated[enchant] = next;
		}
		completedCounts = updated;
	}

	function resetAll() {
		selected = new Set();
		completedCounts = {};
	}

	let allItems = $derived(sections.flatMap((section) => section.items));

	let totals = $derived.by(() => {
		const counts = {};
		for (const item of allItems) {
			if (!selected.has(item.title)) continue;
			for (const enchant of item.enchants) {
				counts[enchant] = (counts[enchant] ?? 0) + 1;
			}
		}
		return Object.entries(counts).sort((a, b) => b[1] - a[1]);
	});

	let pendingTotals = $derived(
		totals
			.map(([enchant, total]) => [enchant, total - (completedCounts[enchant] ?? 0)])
			.filter(([, remaining]) => remaining > 0)
	);

	let completedTotals = $derived(
		totals
			.map(([enchant]) => [enchant, completedCounts[enchant] ?? 0])
			.filter(([, done]) => done > 0)
	);
</script>

<div class="total-wrapper">
	<h1 class="page-title">Total Table</h1>
	<p class="intro">Pick your gear, and we'll add up every enchanted book you'll need.</p>

	{#each sections as section, s (s)}
		<div class="section-divider">
			<span class="section-label">{section.title}</span>
		</div>
		<div class="item-grid">
			{#each section.items as item, i (i)}
				<button
					class="item-tile"
					class:selected={selected.has(item.title)}
					onclick={() => toggleItem(item.title)}
				>
					{item.title}
				</button>
			{/each}
		</div>
	{/each}

	<div class="divider"></div>
	<div class="table-header-row">
		<h2 class="section-title">Enchants needed</h2>
		{#if selected.size > 0}
			<button class="reset-button" onclick={resetAll}>Reset</button>
		{/if}
	</div>

	{#if totals.length === 0}
		<div class="gray-container">
			<p class="empty-text">Select some gear above to see the total.</p>
		</div>
	{:else}
		{#if pendingTotals.length > 0}
			<div class="gray-container">
				{#each pendingTotals as [enchant, remaining], i (i)}
					{@const total = totals.find(([e]) => e === enchant)[1]}
					<button class="total-row" onclick={() => markOneComplete(enchant, total)}>
						<span class="total-checkbox"></span>
						<p class="total-name">{enchant}</p>
						<span class="total-count">x{remaining}</span>
					</button>
				{/each}
			</div>
		{/if}

		{#if completedTotals.length > 0}
			<p class="container-sub">Completed</p>
			<div class="gray-container completed-container">
				{#each completedTotals as [enchant, done], i (i)}
					<button class="total-row completed-row" onclick={() => unmarkOneComplete(enchant)}>
						<span class="total-checkbox checked">✓</span>
						<p class="total-name completed-name">{enchant}</p>
						<span class="total-count completed-count">x{done}</span>
					</button>
				{/each}
			</div>
		{/if}
	{/if}
</div>
<Footer />

<style>
	.total-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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
			margin: 0 0 0.25rem;
		}

		.section-divider {
			display: flex;
			align-items: center;
			gap: 0.6rem;
			margin: 0.75rem 0 0.25rem;
		}

		.section-divider::before,
		.section-divider::after {
			content: '';
			flex: 1;
			height: 1px;
			background-color: #333336;
		}

		.section-label {
			color: var(--secondary);
			font-size: 0.75rem;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			white-space: nowrap;
		}

		.item-grid {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.item-tile {
			background-color: #242427;
			border: 1px solid #3a3a3d;
			border-radius: 0.6rem;
			padding: 0.55rem 0.9rem;
			color: white;
			font-weight: bold;
			font-size: 0.85rem;
			cursor: pointer;
			transition: all 0.15s ease;
		}

		.item-tile.selected {
			background-color: var(--secondary);
			border-color: var(--secondary);
			color: white;
		}

		.divider {
			height: 1px;
			background-color: #333336;
			margin: 0.5rem 0;
		}

		.table-header-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.section-title {
			color: white;
			font-size: 1.15rem;
			margin: 0 0 0.25rem;
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
		}

		.container-sub {
			color: #a8a8a8;
			font-weight: bold;
			font-size: 0.75rem;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			margin: 0.5rem 0 0.25rem;
		}

		.gray-container {
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 0.5rem 1rem;
			display: flex;
			flex-direction: column;
		}

		.completed-container {
			opacity: 0.6;
		}

		.empty-text {
			color: #8a8a8d;
			font-weight: bold;
			font-size: 0.85rem;
			text-align: center;
			padding: 0.75rem 0;
			margin: 0;
		}

		.total-row {
			display: flex;
			align-items: center;
			gap: 0.6rem;
			padding: 0.6rem 0;
			border-bottom: 1px solid #333336;
			background: none;
			border-left: none;
			border-right: none;
			border-top: none;
			width: 100%;
			cursor: pointer;
			text-align: left;
		}

		.total-row:last-child {
			border-bottom: none;
		}

		.total-checkbox {
			flex-shrink: 0;
			width: 18px;
			height: 18px;
			border-radius: 0.35rem;
			border: 1px solid #3a3a3d;
			background-color: #1a1a1c;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 0.7rem;
			color: white;
		}

		.total-checkbox.checked {
			background-color: var(--secondary);
			border-color: var(--secondary);
		}

		.total-name {
			flex: 1;
			color: white;
			font-weight: bold;
			font-size: 0.9rem;
			margin: 0;
		}

		.completed-name {
			text-decoration: line-through;
			color: #8a8a8d;
		}

		.total-count {
			color: var(--secondary);
			font-weight: bold;
			font-size: 0.9rem;
		}

		.completed-count {
			color: #8a8a8d;
		}
	}
</style>
