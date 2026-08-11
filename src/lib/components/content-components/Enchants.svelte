<script>
	import Button from '$lib/components/element-components/Button.svelte';

	let selectedTab = $state('Descriptions');
	let sortableTabs = $state(['Descriptions', 'Best Enchants', 'Total Table']);
</script>

<div class="general-sorter no-padding">
	{#each sortableTabs as tab, i (i)}
		<Button
			onclick={() => {
				selectedTab = tab;
			}}>{tab}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedTab == 'Descriptions'}
		<p>Descriptions</p>
	{:else if selectedTab == 'Best Enchants'}
		<p>Best Enchants</p>
	{:else if selectedTab == 'Total Table'}
		<p>Total Table</p>
	{/if}
</div>
