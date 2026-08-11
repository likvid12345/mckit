<script>
	import Button from '$lib/components/element-components/Button.svelte';
	import Header from '$lib/components/element-components/Header.svelte';

	import Ores from '../content-components/Ores.svelte';
	import Trims from '../content-components/Trims.svelte';
	import EmeraldTrades from '../content-components/EmeraldTrades.svelte';
	import Beacon from '../content-components/Beacon.svelte';
	import Enchants from '../content-components/Enchants.svelte';
	import Potions from '../content-components/Potions.svelte';
	import Discord from '../content-components/Discord.svelte';
	import Achievements from '../content-components/Achievements.svelte';
	import Hotkeys from '../content-components/Hotkeys.svelte';

	let selectedContent = $state('beacon');
	let sortableContent = $state([
		'Beacon',
		'Enchants',
		'Potions',
		'Ores',
		'Trims',
		'Emerald Trades',
		'Hotkeys',
		'Achievements',
		'Discord'
	]);
</script>

<Header />

<div class="general-sorter">
	{#each sortableContent as contentTab, i (i)}
		<Button
			onclick={() => {
				selectedContent = contentTab.toLowerCase().replace(/\s/g, '');
			}}>{contentTab}</Button
		>
	{/each}
</div>
<div class="content-wrapper">
	{#if selectedContent == 'beacon'}
		<Beacon />
	{:else if selectedContent == 'enchants'}
		<Enchants />
	{:else if selectedContent == 'potions'}
		<Potions />
	{:else if selectedContent == 'ores'}
		<Ores />
	{:else if selectedContent == 'trims'}
		<Trims />
	{:else if selectedContent == 'emeraldtrades'}
		<EmeraldTrades />
	{:else if selectedContent == 'hotkeys'}
		<Hotkeys />
	{:else if selectedContent == 'achievements'}
		<Achievements />
	{:else if selectedContent == 'discord'}
		<Discord />
	{/if}
</div>

<style>
	.content-wrapper {
		padding: 1rem;
	}
</style>
