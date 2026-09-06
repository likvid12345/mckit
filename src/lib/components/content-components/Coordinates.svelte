<script>
	import Footer from '../element-components/Footer.svelte';
	import AdSlot from '../element-components/AdSlot.svelte';

	import { onMount } from 'svelte';
	import { Preferences } from '@capacitor/preferences';

	const STORAGE_KEY = 'saved_coordinates';

	let coordinates = $state([]);
	let loaded = $state(false);

	let titleInput = $state('');
	let xInput = $state('');
	let yInput = $state('');
	let zInput = $state('');

	let searchQuery = $state('');

	onMount(async () => {
		try {
			const saved = await Preferences.get({ key: STORAGE_KEY });
			if (saved.value) {
				coordinates = JSON.parse(saved.value);
			}
		} catch (e) {
			console.error('Failed to load coordinates', e);
		}
		loaded = true;
	});

	$effect(() => {
		if (!loaded) return;
		Preferences.set({ key: STORAGE_KEY, value: JSON.stringify(coordinates) });
	});

	function addCoordinate() {
		if (!titleInput.trim() || xInput === '' || yInput === '' || zInput === '') return;

		coordinates = [
			...coordinates,
			{
				id: crypto.randomUUID(),
				title: titleInput.trim(),
				x: xInput,
				y: yInput,
				z: zInput
			}
		];

		titleInput = '';
		xInput = '';
		yInput = '';
		zInput = '';
	}

	function deleteCoordinate(id) {
		coordinates = coordinates.filter((c) => c.id !== id);
	}

	let filteredCoordinates = $derived(
		coordinates.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
	);
</script>

<div class="coords-wrapper">
	<h1 class="page-title">Coordinates</h1>
	<p class="intro">Save and search your important Minecraft locations.</p>

	<div class="divider"></div>

	<h2 class="section-title">Add a location</h2>
	<div class="gray-container">
		<div class="xyz-row">
			<input class="xyz-input" type="text" placeholder="X" bind:value={xInput} />
			<input class="xyz-input" type="text" placeholder="Y" bind:value={yInput} />
			<input class="xyz-input" type="text" placeholder="Z" bind:value={zInput} />
		</div>
		<input
			class="title-input"
			type="text"
			placeholder="Title (e.g. Base, Nether Portal)"
			bind:value={titleInput}
		/>
		<button class="add-button" onclick={addCoordinate}>Add Coordinates</button>
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Saved locations</h2>
	<input
		class="search-input"
		type="text"
		placeholder="Search by title..."
		bind:value={searchQuery}
	/>

	{#if filteredCoordinates.length === 0}
		<div class="gray-container">
			<p class="empty-text">
				{coordinates.length === 0 ? 'No coordinates saved yet.' : 'No results match your search.'}
			</p>
		</div>
	{:else}
		<div class="coord-list">
			{#each filteredCoordinates as coord (coord.id)}
				<div class="coord-row">
					<div class="coord-info">
						<p class="coord-title">{coord.title}</p>
						<p class="coord-values">X: {coord.x} &nbsp; Y: {coord.y} &nbsp; Z: {coord.z}</p>
					</div>
					<button class="delete-button" onclick={() => deleteCoordinate(coord.id)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M4 7l16 0" />
							<path d="M10 11l0 6" />
							<path d="M14 11l0 6" />
							<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
							<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
						</svg>
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
	.coords-wrapper {
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

		.gray-container {
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 1rem 1.1rem;
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
		}

		.xyz-row {
			display: flex;
			gap: 0.5rem;
		}

		.xyz-input {
			flex: 1;
			min-width: 0;
			background-color: #1a1a1c;
			border: 1px solid #3a3a3d;
			border-radius: 0.6rem;
			padding: 0.6rem 0.7rem;
			color: white;
			font-weight: bold;
			font-size: 0.9rem;
			text-align: center;
		}

		.xyz-input::placeholder {
			color: #6a6a6d;
		}

		.title-input {
			background-color: #1a1a1c;
			border: 1px solid #3a3a3d;
			border-radius: 0.6rem;
			padding: 0.65rem 0.8rem;
			color: white;
			font-weight: bold;
			font-size: 0.9rem;
		}

		.title-input::placeholder {
			color: #6a6a6d;
		}

		.add-button {
			background-color: var(--secondary);
			border: none;
			border-radius: 0.75rem;
			padding: 0.75rem;
			color: white;
			font-weight: bold;
			font-size: 0.9rem;
			cursor: pointer;
		}

		.search-input {
			background-color: #242427;
			border: 1px solid #3a3a3d;
			border-radius: 0.75rem;
			padding: 0.7rem 0.9rem;
			color: white;
			font-weight: bold;
			font-size: 0.9rem;
		}

		.search-input::placeholder {
			color: #6a6a6d;
		}

		.empty-text {
			color: #8a8a8d;
			font-weight: bold;
			font-size: 0.85rem;
			text-align: center;
			margin: 0;
			padding: 0.5rem 0;
		}

		.coord-list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.coord-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.75rem;
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 0.75rem 1rem;
		}

		.coord-info {
			display: flex;
			flex-direction: column;
			gap: 0.15rem;
			min-width: 0;
		}

		.coord-title {
			color: white;
			font-weight: bold;
			font-size: 0.95rem;
			margin: 0;
		}

		.coord-values {
			color: #8a8a8d;
			font-weight: bold;
			font-size: 0.78rem;
			margin: 0;
		}

		.delete-button {
			flex-shrink: 0;
			background-color: transparent;
			border: 1px solid #3a3a3d;
			border-radius: 0.5rem;
			width: 34px;
			height: 34px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #a8a8a8;
			cursor: pointer;
		}

		.delete-button i {
			font-size: 1rem;
		}

		.delete-button:hover {
			border-color: var(--secondary);
			color: var(--secondary);
		}
	}
</style>
