<script>
	import Button from '$lib/components/element-components/Button.svelte';

	let selectedTrade = $state('Wheat');
	let sortableTrades = $state([
		'Wheat',
		'Potato',
		'Carrot',
		'Beetroot',
		'Coal',
		'String',
		'Gravel',
		'Stick',
		'Flint',
		'Feather',
		'Tripwire Hook',
		'Leather',
		'Rabbit Hide',
		'Scute',
		'Paper',
		'Book',
		'Ink Sac',
		'Glass Pane',
		'Compass',
		'Rotten Flesh',
		'Gold Ingot',
		"Rabbit's Foot",
		'Nether Wart',
		'Iron Ingot',
		'Diamond',
		'Wool',
		'Dye',
		'Raw Porkchop',
		'Raw Chicken',
		'Raw Rabbit',
		'Clay Ball',
		'Stone'
	]);
</script>

<div class="general-sorter no-padding">
	{#each sortableTrades as trade, i (i)}
		<Button
			class={selectedTrade === trade ? 'selected-button' : ''}
			onclick={() => {
				selectedTrade = trade;
			}}>{trade}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedTrade == 'Wheat'}
		<p>Wheat</p>
	{:else if selectedTrade == 'Potato'}
		<p>Potato</p>
	{:else if selectedTrade == 'Carrot'}
		<p>Carrot</p>
	{:else if selectedTrade == 'Beetroot'}
		<p>Beetroot</p>
	{:else if selectedTrade == 'Coal'}
		<p>Coal</p>
	{:else if selectedTrade == 'String'}
		<p>String</p>
	{:else if selectedTrade == 'Gravel'}
		<p>Gravel</p>
	{:else if selectedTrade == 'Stick'}
		<p>Stick</p>
	{:else if selectedTrade == 'Flint'}
		<p>Flint</p>
	{:else if selectedTrade == 'Feather'}
		<p>Feather</p>
	{:else if selectedTrade == 'Tripwire Hook'}
		<p>Tripwire Hook</p>
	{:else if selectedTrade == 'Leather'}
		<p>Leather</p>
	{:else if selectedTrade == 'Rabbit Hide'}
		<p>Rabbit Hide</p>
	{:else if selectedTrade == 'Scute'}
		<p>Scute</p>
	{:else if selectedTrade == 'Paper'}
		<p>Paper</p>
	{:else if selectedTrade == 'Book'}
		<p>Book</p>
	{:else if selectedTrade == 'Ink Sac'}
		<p>Ink Sac</p>
	{:else if selectedTrade == 'Glass Pane'}
		<p>Glass Pane</p>
	{:else if selectedTrade == 'Compass'}
		<p>Compass</p>
	{:else if selectedTrade == 'Rotten Flesh'}
		<p>Rotten Flesh</p>
	{:else if selectedTrade == 'Gold Ingot'}
		<p>Gold Ingot</p>
	{:else if selectedTrade == "Rabbit's Foot"}
		<p>Rabbit's Foot</p>
	{:else if selectedTrade == 'Nether Wart'}
		<p>Nether Wart</p>
	{:else if selectedTrade == 'Iron Ingot'}
		<p>Iron Ingot</p>
	{:else if selectedTrade == 'Diamond'}
		<p>Diamond</p>
	{:else if selectedTrade == 'Wool'}
		<p>Wool</p>
	{:else if selectedTrade == 'Dye'}
		<p>Dye</p>
	{:else if selectedTrade == 'Raw Porkchop'}
		<p>Raw Porkchop</p>
	{:else if selectedTrade == 'Raw Chicken'}
		<p>Raw Chicken</p>
	{:else if selectedTrade == 'Raw Rabbit'}
		<p>Raw Rabbit</p>
	{:else if selectedTrade == 'Clay Ball'}
		<p>Clay Ball</p>
	{:else if selectedTrade == 'Stone'}
		<p>Stone</p>
	{/if}
</div>
