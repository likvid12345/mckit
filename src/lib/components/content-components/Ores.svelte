<script>
	import Button from '$lib/components/element-components/Button.svelte';

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

<div class="general-sorter no-padding">
	{#each sortableOres as ore, i (i)}
		<Button
			onclick={() => {
				selectedOre = ore;
			}}>{ore}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedOre == 'Coal'}
		<p>Coal</p>
	{:else if selectedOre == 'Copper'}
		<p>Copper</p>
	{:else if selectedOre == 'Iron'}
		<p>Iron</p>
	{:else if selectedOre == 'Gold'}
		<p>Gold</p>
	{:else if selectedOre == 'Amethyst'}
		<p>Amethyst</p>
	{:else if selectedOre == 'Lapis'}
		<p>Lapis</p>
	{:else if selectedOre == 'Redstone'}
		<p>Redstone</p>
	{:else if selectedOre == 'Diamond'}
		<p>Diamond</p>
	{:else if selectedOre == 'Emerald'}
		<p>Emerald</p>
	{:else if selectedOre == 'Quartz'}
		<p>Quartz</p>
	{:else if selectedOre == 'Nether Gold'}
		<p>Nether Gold</p>
	{:else if selectedOre == 'Ancient Debris'}
		<p>Ancient Debris</p>
	{/if}
</div>
