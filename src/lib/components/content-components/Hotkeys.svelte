<script>
	import Footer from '$lib/components/element-components/Footer.svelte';
	const groups = $state([
		{
			title: 'Movement',
			keys: [
				{ key: 'W', action: 'Walk forward' },
				{ key: 'S', action: 'Walk backward' },
				{ key: 'A', action: 'Strafe left' },
				{ key: 'D', action: 'Strafe right' },
				{ key: 'Space', action: 'Jump' },
				{ key: 'Shift', action: 'Sneak' },
				{ key: 'Ctrl', action: 'Sprint' }
			]
		},
		{
			title: 'Inventory',
			keys: [
				{ key: 'E', action: 'Open/close inventory' },
				{ key: '1–9', action: 'Switch hotbar slot' },
				{ key: 'Q', action: 'Drop selected item' },
				{ key: 'Ctrl + Q', action: 'Drop entire stack' },
				{ key: 'F', action: 'Swap main hand and offhand' },
				{ key: 'Scroll Wheel', action: 'Cycle through hotbar' }
			]
		},
		{
			title: 'Mouse',
			keys: [
				{ key: 'Left Click', action: 'Attack / mine' },
				{ key: 'Right Click', action: 'Use item / place block' },
				{ key: 'Middle Click', action: 'Pick block' },
				{ key: 'Shift + Left Click', action: 'Quick-move items in/out of a container' }
			]
		},
		{
			title: 'Multiplayer & Menus',
			keys: [
				{ key: 'T', action: 'Open chat' },
				{ key: '/', action: 'Open chat with a command ready to type' },
				{ key: 'Tab', action: 'Show player list' },
				{ key: 'Esc', action: 'Pause / close menu' }
			]
		},
		{
			title: 'Inventory Tricks',
			keys: [
				{ key: 'Right-click stack', action: 'Split a stack in half' },
				{
					key: 'Shift + Click',
					action: 'Move item instantly between inventory and an open container'
				},
				{ key: 'Shift + Click (crafting)', action: 'Craft the max amount possible at once' },
				{ key: 'Ctrl + Q', action: 'Drop the entire stack at once' },
				{
					key: 'Left-drag across slots',
					action: 'Spread a held stack evenly across selected slots'
				},
				{ key: 'Right-drag across slots', action: 'Place 1 item per slot across selected slots' }
			]
		},
		{
			title: 'Debug & Utility',
			keys: [
				{ key: 'F3', action: 'Show coordinates and debug info' },
				{ key: 'F3 + H', action: 'Show exact durability numbers and item IDs on tooltips' },
				{ key: 'F3 + G', action: 'Show chunk borders — each chunk is 16x16 blocks' },
				{ key: 'F3 + B', action: 'Show entity hitboxes' },
				{ key: 'F3 + C', action: 'Copy /tp command to clipboard (hold ~5s)' },
				{ key: 'F1', action: 'Hide HUD' },
				{ key: 'F2', action: 'Take a screenshot' },
				{ key: 'F5', action: 'Cycle camera view (1st/3rd person)' }
			]
		}
	]);
</script>

<div class="hotkeys-wrapper">
	<h1 class="page-title">Hotkeys</h1>
	<p class="intro">The default keyboard controls in Minecraft: Java Edition.</p>

	{#each groups as group, i (i)}
		<div class="divider"></div>
		<h2 class="section-title">{group.title}</h2>
		<div class="gray-container">
			{#each group.keys as item, j (j)}
				<div class="key-row">
					<span class="key-badge">{item.key}</span>
					<p class="key-action">{item.action}</p>
				</div>
			{/each}
		</div>
	{/each}

	<div class="divider"></div>
	<div class="info-note">
		<p>
			F3 + H is a toggle, not a one-time action — if durability numbers don't show up right away,
			close and reopen your inventory after pressing it.
		</p>
	</div>

	<div class="info-note">
		<p>
			All of these can be changed in Options → Controls → Key Binds — click any action and press a
			new key to remap it.
		</p>
	</div>
</div>
<Footer />

<style>
	.hotkeys-wrapper {
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
			padding: 0.5rem 1rem;
			display: flex;
			flex-direction: column;
		}

		.key-row {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			padding: 0.6rem 0;
			border-bottom: 1px solid #333336;
		}

		.key-row:last-child {
			border-bottom: none;
		}

		.key-badge {
			flex-shrink: 0;
			min-width: 64px;
			text-align: center;
			background-color: #1a1a1c;
			border: 1px solid #3a3a3d;
			border-radius: 0.4rem;
			padding: 0.3rem 0.6rem;
			color: white;
			font-weight: bold;
			font-size: 0.8rem;
		}

		.key-action {
			color: #c0c0c0;
			font-weight: bold;
			font-size: 0.9rem;
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
				font-size: 0.85rem;
				font-weight: bold;
				margin: 0;
				line-height: 1.4;
			}
		}
	}
</style>
