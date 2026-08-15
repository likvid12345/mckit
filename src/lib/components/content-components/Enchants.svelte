<script>
	import Button from '$lib/components/element-components/Button.svelte';
	import Descriptions from '$lib/components/enchant-components/Descriptions.svelte';
	import descriptions from '$lib/assets/general/descriptions.svg';
	import bestenchants from '$lib/assets/general/bestenchants.svg';
	import totaltable from '$lib/assets/general/totaltable.svg';
	let selectedTab = $state('Descriptions');
	let sortableTabs = $state(['Descriptions', 'Best Enchants', 'Total Table']);
</script>

<div class="general-sorter">
	{#each sortableTabs as tab, i (i)}
		<Button
			class={selectedTab === tab ? 'selected-button' : ''}
			onclick={() => {
				selectedTab = tab;
			}}
		>
			{#if tab == 'Descriptions'}
				<img class="general-sorter-image" src={descriptions} alt="descriptions" />
			{:else if tab == 'Best Enchants'}
				<img class="general-sorter-image" src={bestenchants} alt="bestenchants" />
			{:else if tab == 'Total Table'}
				<img class="general-sorter-image" src={totaltable} alt="totaltable" />
			{/if}
			{tab}</Button
		>
	{/each}
</div>

<div class="enchants-wrapper">
	{#if selectedTab == 'Descriptions'}
		<Descriptions />
	{:else if selectedTab == 'Best Enchants'}
		<p>Best Enchants</p>
	{:else if selectedTab == 'Total Table'}
		<p>Total Table</p>
	{/if}
</div>
