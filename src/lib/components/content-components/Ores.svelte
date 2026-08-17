<script>
	import Button from '$lib/components/element-components/Button.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	import coal from '$lib/assets/ores/coal.svg';
	import copper from '$lib/assets/ores/copper.svg';
	import diamond from '$lib/assets/ores/diamond.svg';
	import lapis from '$lib/assets/ores/lapis.svg';
	import emerald from '$lib/assets/ores/emerald.svg';
	import redstone from '$lib/assets/ores/redstone.svg';
	import quartz from '$lib/assets/ores/quartz.svg';
	import ancientdebris from '$lib/assets/ores/ancientdebris.svg';
	import amethyst from '$lib/assets/ores/amethyst.svg';
	import iron from '$lib/assets/ores/iron.svg';
	import gold from '$lib/assets/ores/gold.svg';

	import nethergold from '$lib/assets/ores/nethergold.svg';
	import Coal from './ores-components/Coal.svelte';
	import Copper from './ores-components/Copper.svelte';
	import Iron from './ores-components/Iron.svelte';
	import Gold from './ores-components/Gold.svelte';
	import Amethyst from './ores-components/Amethyst.svelte';
	import Diamond from './ores-components/Diamond.svelte';
	import Emerald from './ores-components/Emerald.svelte';
	import Quartz from './ores-components/Quartz.svelte';
	import AncientDebris from './ores-components/AnchientDebris.svelte';
	import NetherGold from './ores-components/NetherGold.svelte';
	import Redstone from './ores-components/Redstone.svelte';
	import Lapis from './ores-components/Lapis.svelte';
	let selectedOre = $state('Coal');
	let sortableOres = $state([
		'Coal',
		'Copper',
		'Iron',
		'Gold',
		'Amethyst',
		'Lapis',
		'Redstone',
		'Diamond',
		'Emerald',
		'Quartz',
		'Nether Gold',
		'Ancient Debris'
	]);
</script>

<div class="general-sorter">
	{#each sortableOres as ore, i (i)}
		<Button
			class={selectedOre === ore ? 'selected-button' : ''}
			onclick={() => {
				selectedOre = ore;
			}}
		>
			{#if ore == 'Coal'}
				<img class="general-sorter-image" src={coal} alt="coal" />
			{:else if ore == 'Copper'}
				<img class="general-sorter-image" src={copper} alt="copper" />
			{:else if ore == 'Lapis'}
				<img class="general-sorter-image" src={lapis} alt="lapis" />
			{:else if ore == 'Diamond'}
				<img class="general-sorter-image" src={diamond} alt="diamond" />
			{:else if ore == 'Emerald'}
				<img class="general-sorter-image" src={emerald} alt="emerald" />
			{:else if ore == 'Quartz'}
				<img class="general-sorter-image" src={quartz} alt="quartz" />
			{:else if ore == 'Redstone'}
				<img class="general-sorter-image" src={redstone} alt="redstone" />
			{:else if ore == 'Nether Gold'}
				<img class="general-sorter-image" src={nethergold} alt="nethergold" />
			{:else if ore == 'Iron'}
				<img class="general-sorter-image" src={iron} alt="iron" />
			{:else if ore == 'Gold'}
				<img class="general-sorter-image" src={gold} alt="gold" />
			{:else if ore == 'Amethyst'}
				<img class="general-sorter-image" src={amethyst} alt="amethyst" />
			{:else if ore == 'Ancient Debris'}
				<img class="general-sorter-image" src={ancientdebris} alt="ancientdebris" />
			{/if}
			{ore}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedOre == 'Coal'}
		<Coal />
	{:else if selectedOre == 'Copper'}
		<Copper />
	{:else if selectedOre == 'Iron'}
		<Iron />
	{:else if selectedOre == 'Gold'}
		<Gold />
	{:else if selectedOre == 'Amethyst'}
		<Amethyst />
	{:else if selectedOre == 'Lapis'}
		<Lapis />
	{:else if selectedOre == 'Redstone'}
		<Redstone />
	{:else if selectedOre == 'Diamond'}
		<Diamond />
	{:else if selectedOre == 'Emerald'}
		<Emerald />
	{:else if selectedOre == 'Quartz'}
		<Quartz />
	{:else if selectedOre == 'Nether Gold'}
		<NetherGold />
	{:else if selectedOre == 'Ancient Debris'}
		<AncientDebris />
	{/if}
</div>
<Footer />
