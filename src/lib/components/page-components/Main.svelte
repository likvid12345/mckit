<script>
	import Button from '$lib/components/element-components/Button.svelte';
	import Header from '$lib/components/element-components/Header.svelte';
	import Ores from '../content-components/Ores.svelte';
	import Trims from '../content-components/Trims.svelte';
	import EmeraldTrades from '../content-components/EmeraldTrades.svelte';
	import Beacon from '../content-components/Beacon.svelte';
	import Enchants from '../content-components/Enchants.svelte';
	import Potions from '../content-components/Potions.svelte';
	import Hotkeys from '../content-components/Hotkeys.svelte';
	import Coordinates from '../content-components/Coordinates.svelte';
	import VillagerCuring from '../content-components/VillagerCuring.svelte';
	import hotkeys from '$lib/assets/general/hotkeys.svg';
	import beacon from '$lib/assets/general/beacon.svg';
	import enchants from '$lib/assets/general/enchants.svg';
	import potions from '$lib/assets/general/potions.svg';
	import ores from '$lib/assets/general/ore.svg';
	import trim from '$lib/assets/general/trim.svg';
	import emeraldtrade from '$lib/assets/general/emeraldtrade.svg';
	import coordinates from '$lib/assets/general/coordinates.svg';
	import goldenapple from '$lib/assets/general/goldenapple.svg';
	let selectedContent = $state('beacon');
	let sortableContent = $state([
		'Beacon',
		'Ores',
		'Potions',
		'Enchants',
		'Trims',
		'Emerald Trades',
		'VillagerCuring',
		'Coordinates',
		'Hotkeys'
	]);
</script>

<Header />

<div class="general-sorter">
	{#each sortableContent as contentTab, i (i)}
		<Button
			class={selectedContent === contentTab.toLowerCase().replace(/\s/g, '')
				? 'selected-button'
				: ''}
			onclick={() => {
				selectedContent = contentTab.toLowerCase().replace(/\s/g, '');
			}}
		>
			{#if contentTab == 'Discord'}
				<span class="pulse-circle"></span>
			{:else if contentTab == 'Hotkeys'}
				<img class="general-sorter-image" src={hotkeys} alt="hotkeys" />
			{:else if contentTab == 'Beacon'}
				<img class="general-sorter-image" src={beacon} alt="beacon" />
			{:else if contentTab == 'Enchants'}
				<img class="general-sorter-image" src={enchants} alt="enchants" />
			{:else if contentTab == 'Potions'}
				<img class="general-sorter-image" src={potions} alt="potions" />
			{:else if contentTab == 'Ores'}
				<img class="general-sorter-image" src={ores} alt="ores" />
			{:else if contentTab == 'Trims'}
				<img class="general-sorter-image" src={trim} alt="trim" />
			{:else if contentTab == 'Emerald Trades'}
				<img class="general-sorter-image" src={emeraldtrade} alt="emeraldtrade" />
			{:else if contentTab == 'Coordinates'}
				<img class="general-sorter-image" src={coordinates} alt="coords" />
			{:else if contentTab == 'VillagerCuring'}
				<img class="general-sorter-image" src={goldenapple} alt="gepl" />
			{/if}
			{contentTab}</Button
		>
	{/each}
</div>
<div class="content-wrapper">
	{#if selectedContent == 'beacon'}
		<Beacon />
	{:else if selectedContent == 'ores'}
		<Ores />
	{:else if selectedContent == 'potions'}
		<Potions />
	{:else if selectedContent == 'enchants'}
		<Enchants />
	{:else if selectedContent == 'trims'}
		<Trims />
	{:else if selectedContent == 'emeraldtrades'}
		<EmeraldTrades />
	{:else if selectedContent == 'villagercuring'}
		<VillagerCuring />
	{:else if selectedContent == 'coordinates'}
		<Coordinates />
	{:else if selectedContent == 'hotkeys'}
		<Hotkeys />
	{/if}
</div>
