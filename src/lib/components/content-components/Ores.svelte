<script>
	import Button from '$lib/components/element-components/Button.svelte';

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
			}}>{ore}</Button
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
