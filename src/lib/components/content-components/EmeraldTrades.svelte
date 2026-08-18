<script>
	import Button from '$lib/components/element-components/Button.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';

	import String from './trades-components/String.svelte';
	import Wheat from './trades-components/Wheat.svelte';
	import Potato from './trades-components/Potato.svelte';
	import Carrot from './trades-components/Carrot.svelte';
	import Beetroot from './trades-components/Beetroot.svelte';
	import Coal from './trades-components/Coal.svelte';
	import Stick from './trades-components/Stick.svelte';
	import Flint from './trades-components/Flint.svelte';
	import Feather from './trades-components/Feather.svelte';
	import Tripwirehook from './trades-components/Tripwirehook.svelte';
	import Leather from './trades-components/Leather.svelte';
	import Rabbithide from './trades-components/Rabbithide.svelte';
	import Scute from './trades-components/Scute.svelte';
	import Paper from './trades-components/Paper.svelte';
	import Inksac from './trades-components/Inksac.svelte';
	import GlassPane from './trades-components/GlassPane.svelte';
	import Compass from './trades-components/Compass.svelte';
	import Rottenflash from './trades-components/Rottenflash.svelte';
	import Goldingot from './trades-components/Goldingot.svelte';
	import Rabitsfoot from './trades-components/Rabitsfoot.svelte';
	import Netherwart from './trades-components/Netherwart.svelte';
	import Ironingot from './trades-components/Ironingot.svelte';
	import Diamond from './trades-components/Diamond.svelte';
	import Wool from './trades-components/Wool.svelte';
	import Dye from './trades-components/Dye.svelte';

	import Stone from './trades-components/Stone.svelte';
	import Clayball from './trades-components/Clayball.svelte';
	import Rawchicken from './trades-components/Rawchicken.svelte';
	import Rawporkchop from './trades-components/Rawporkchop.svelte';
	import Rawrabbit from './trades-components/Rawrabbit.svelte';

	import carrot from '$lib/assets/trades/carrot.svg';
	import clayball from '$lib/assets/trades/clayball.svg';
	import coal from '$lib/assets/trades/coal.svg';
	import paper from '$lib/assets/trades/paper.svg';
	import potato from '$lib/assets/trades/potato.svg';
	import stick from '$lib/assets/trades/stick.svg';
	import stone from '$lib/assets/trades/stone.svg';
	import wheat from '$lib/assets/trades/wheat.svg';
	import string from '$lib/assets/trades/string.svg';
	import beetroot from '$lib/assets/trades/beetroot.svg';
	import rottenflash from '$lib/assets/trades/rottenflesh.svg';
	import rawporkchop from '$lib/assets/trades/rawporkchop.svg';
	import rawrabbit from '$lib/assets/trades/rawrabbit.svg';
	import rawchicken from '$lib/assets/trades/rawchicken.svg';
	import scute from '$lib/assets/trades/scute.svg';
	import netherwart from '$lib/assets/trades/netherwart.svg';
	import dye from '$lib/assets/trades/dye.svg';
	import ironingot from '$lib/assets/trades/ironingot.svg';
	import goldingot from '$lib/assets/trades/goldingot.svg';
	import flint from '$lib/assets/trades/flint.svg';
	import tripwirehook from '$lib/assets/trades/tripwirehook.svg';
	import wool from '$lib/assets/trades/wool.svg';
	import diamond from '$lib/assets/trades/diamond.svg';
	import inksac from '$lib/assets/trades/inksac.svg';
	import feather from '$lib/assets/trades/feather.svg';
	import leather from '$lib/assets/trades/leather.svg';
	import rabbithide from '$lib/assets/trades/rabbithide.svg';
	import rabbitsfoot from '$lib/assets/trades/rabbitsfoot.svg';
	import glasspane from '$lib/assets/trades/glasspane.svg';
	import compass from '$lib/assets/trades/compass.svg';

	let selectedTrade = $state('Wheat');
	let sortableTrades = $state([
		'Wheat',
		'Potato',
		'Carrot',
		'Beetroot',
		'Coal',
		'String',
		'Stick',
		'Flint',
		'Feather',
		'Tripwire Hook',
		'Leather',
		'Rabbit Hide',
		'Scute',
		'Paper',
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

<div class="general-sorter">
	{#each sortableTrades as trade, i (i)}
		<Button
			class={selectedTrade === trade ? 'selected-button' : ''}
			onclick={() => {
				selectedTrade = trade;
			}}
		>
			{#if trade == 'Wheat'}
				<img class="general-sorter-image" src={wheat} alt="wheat" />
			{:else if trade == 'Potato'}
				<img class="general-sorter-image" src={potato} alt="potato" />
			{:else if trade == 'Carrot'}
				<img class="general-sorter-image" src={carrot} alt="carrot" />
			{:else if trade == 'Coal'}
				<img class="general-sorter-image" src={coal} alt="coal" />
			{:else if trade == 'Paper'}
				<img class="general-sorter-image" src={paper} alt="paper" />
			{:else if trade == 'Stone'}
				<img class="general-sorter-image" src={stone} alt="stone" />
			{:else if trade == 'Clay Ball'}
				<img class="general-sorter-image" src={clayball} alt="clayball" />
			{:else if trade == 'Stick'}
				<img class="general-sorter-image" src={stick} alt="stick" />
			{:else if trade == 'String'}
				<img class="general-sorter-image" src={string} alt="string" />
			{:else if trade == 'Flint'}
				<img class="general-sorter-image" src={flint} alt="flint" />
			{:else if trade == 'Beetroot'}
				<img class="general-sorter-image" src={beetroot} alt="beetroot" />
			{:else if trade == 'Rotten Flesh'}
				<img class="general-sorter-image" src={rottenflash} alt="rottenflesh" />
			{:else if trade == 'Raw Porkchop'}
				<img class="general-sorter-image" src={rawporkchop} alt="rawporkchop" />
			{:else if trade == 'Raw Rabbit'}
				<img class="general-sorter-image" src={rawrabbit} alt="rawrabbit" />
			{:else if trade == 'Raw Chicken'}
				<img class="general-sorter-image" src={rawchicken} alt="rawchicken" />
			{:else if trade == 'Scute'}
				<img class="general-sorter-image" src={scute} alt="scute" />
			{:else if trade == 'Tripwire Hook'}
				<img class="general-sorter-image" src={tripwirehook} alt="tripwirehook" />
			{:else if trade == 'Nether Wart'}
				<img class="general-sorter-image" src={netherwart} alt="netherwart" />
			{:else if trade == 'Dye'}
				<img class="general-sorter-image" src={dye} alt="dye" />
			{:else if trade == 'Iron Ingot'}
				<img class="general-sorter-image" src={ironingot} alt="ironingot" />
			{:else if trade == 'Gold Ingot'}
				<img class="general-sorter-image" src={goldingot} alt="goldingot" />
			{:else if trade == 'Wool'}
				<img class="general-sorter-image" src={wool} alt="wool" />
			{:else if trade == 'Feather'}
				<img class="general-sorter-image" src={feather} alt="feather" />
			{:else if trade == 'Leather'}
				<img class="general-sorter-image" src={leather} alt="leather" />
			{:else if trade == 'Rabbit Hide'}
				<img class="general-sorter-image" src={rabbithide} alt="rabbithide" />
			{:else if trade == 'Ink Sac'}
				<img class="general-sorter-image" src={inksac} alt="inksac" />
			{:else if trade == 'Diamond'}
				<img class="general-sorter-image" src={diamond} alt="diamond" />
			{:else if trade == "Rabbit's Foot"}
				<img class="general-sorter-image" src={rabbitsfoot} alt="rabbitsfoot" />
			{:else if trade == 'Glass Pane'}
				<img class="general-sorter-image" src={glasspane} alt="glasspane" />
			{:else if trade == 'Compass'}
				<img class="general-sorter-image" src={compass} alt="compass" />
			{/if}
			{trade}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedTrade == 'Wheat'}
		<Wheat />
	{:else if selectedTrade == 'Potato'}
		<Potato />
	{:else if selectedTrade == 'Carrot'}
		<Carrot />
	{:else if selectedTrade == 'Beetroot'}
		<Beetroot />
	{:else if selectedTrade == 'Coal'}
		<Coal />
	{:else if selectedTrade == 'String'}
		<String />
	{:else if selectedTrade == 'Stick'}
		<Stick />
	{:else if selectedTrade == 'Flint'}
		<Flint />
	{:else if selectedTrade == 'Feather'}
		<Feather />
	{:else if selectedTrade == 'Tripwire Hook'}
		<Tripwirehook />
	{:else if selectedTrade == 'Leather'}
		<Leather />
	{:else if selectedTrade == 'Rabbit Hide'}
		<Rabbithide />
	{:else if selectedTrade == 'Scute'}
		<Scute />
	{:else if selectedTrade == 'Paper'}
		<Paper />
	{:else if selectedTrade == 'Ink Sac'}
		<Inksac />
	{:else if selectedTrade == 'Glass Pane'}
		<GlassPane />
	{:else if selectedTrade == 'Compass'}
		<Compass />
	{:else if selectedTrade == 'Rotten Flesh'}
		<Rottenflash />
	{:else if selectedTrade == 'Gold Ingot'}
		<Goldingot />
	{:else if selectedTrade == "Rabbit's Foot"}
		<Rabitsfoot />
	{:else if selectedTrade == 'Nether Wart'}
		<Netherwart />
	{:else if selectedTrade == 'Iron Ingot'}
		<Ironingot />
	{:else if selectedTrade == 'Diamond'}
		<Diamond />
	{:else if selectedTrade == 'Wool'}
		<Wool />
	{:else if selectedTrade == 'Dye'}
		<Dye />
	{:else if selectedTrade == 'Raw Porkchop'}
		<Rawporkchop />
	{:else if selectedTrade == 'Raw Chicken'}
		<Rawchicken />
	{:else if selectedTrade == 'Raw Rabbit'}
		<Rawrabbit />
	{:else if selectedTrade == 'Clay Ball'}
		<Clayball />
	{:else if selectedTrade == 'Stone'}
		<Stone />
	{/if}
</div>
<Footer />
