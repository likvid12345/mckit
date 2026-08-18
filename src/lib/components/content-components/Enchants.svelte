<script>
	import Button from '$lib/components/element-components/Button.svelte';
	import Descriptions from '$lib/components/enchant-components/Descriptions.svelte';
	import BestEnchants from '$lib/components/enchant-components/BestEnchants.svelte';
	import TotalTable from '$lib/components/enchant-components/TotalTable.svelte';
	import descriptions from '$lib/assets/general/descriptions.svg';
	import bestenchants from '$lib/assets/general/bestenchants.svg';
	import totaltable from '$lib/assets/general/totaltable.svg';
	let selectedTab = $state('Descriptions');
	let sortableTabs = $state(['Descriptions', 'Best Enchants', 'Total Table']);

	const sections = $state([
		{
			title: 'Weapons',
			items: [
				{
					title: 'Sword',
					enchants: [
						'Sharpness V',
						'Looting III',
						'Unbreaking III',
						'Mending',
						'Sweeping Edge III',
						'Fire Aspect II',
						'Knockback II'
					]
				},
				{
					title: 'Axe',
					enchants: ['Sharpness V', 'Unbreaking III', 'Mending', 'Efficiency V', 'Fortune III']
				},
				{
					title: 'Mace',
					enchants: ['Density V', 'Unbreaking III', 'Mending', 'Wind Burst III', 'Fire Aspect II']
				},
				{
					title: 'Spear',
					enchants: [
						'Lunge III',
						'Sharpness V',
						'Looting III',
						'Unbreaking III',
						'Mending',
						'Fire Aspect II',
						'Knockback II'
					]
				},
				{
					title: 'Trident',
					enchants: ['Impaling V', 'Loyalty III', 'Channeling', 'Unbreaking III', 'Mending']
				},
				{
					title: 'Bow',
					enchants: ['Power V', 'Flame', 'Punch II', 'Unbreaking III', 'Infinity']
				},
				{
					title: 'Crossbow',
					enchants: ['Quick Charge III', 'Multishot', 'Unbreaking III', 'Mending']
				}
			]
		},
		{
			title: 'Tools',
			items: [
				{
					title: 'Pickaxe',
					enchants: ['Efficiency V', 'Fortune III', 'Unbreaking III', 'Mending']
				},
				{
					title: 'Shovel',
					enchants: ['Efficiency V', 'Unbreaking III', 'Mending', 'Silk Touch']
				},
				{
					title: 'Hoe',
					enchants: ['Efficiency V', 'Fortune III', 'Unbreaking III', 'Mending']
				},
				{
					title: 'Shears',
					enchants: ['Efficiency V', 'Unbreaking III', 'Mending']
				}
			]
		},
		{
			title: 'Armor',
			items: [
				{
					title: 'Helmet',
					enchants: [
						'Protection IV',
						'Respiration III',
						'Aqua Affinity',
						'Unbreaking III',
						'Mending',
						'Thorns III'
					]
				},
				{
					title: 'Chestplate',
					enchants: ['Protection IV', 'Unbreaking III', 'Mending', 'Thorns III']
				},
				{
					title: 'Leggings',
					enchants: ['Protection IV', 'Swift Sneak III', 'Unbreaking III', 'Mending', 'Thorns III']
				},
				{
					title: 'Boots',
					enchants: [
						'Protection IV',
						'Feather Falling IV',
						'Depth Strider III',
						'Soul Speed III',
						'Unbreaking III',
						'Mending',
						'Thorns III'
					]
				},
				{
					title: 'Elytra',
					enchants: ['Unbreaking III', 'Mending']
				}
			]
		},
		{
			title: 'Utility',
			items: [
				{
					title: 'Fishing Rod',
					enchants: ['Luck of the Sea III', 'Lure III', 'Unbreaking III', 'Mending']
				},
				{
					title: 'Shield',
					enchants: ['Unbreaking III', 'Mending']
				},
				{
					title: 'Flint and Steel',
					enchants: ['Unbreaking III', 'Mending']
				},
				{
					title: 'Brush',
					enchants: ['Unbreaking III', 'Mending']
				},
				{
					title: 'Carrot on a Stick',
					enchants: ['Unbreaking III', 'Mending']
				},
				{
					title: 'Warped Fungus on a Stick',
					enchants: ['Unbreaking III', 'Mending']
				}
			]
		}
	]);
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
		<BestEnchants />
	{:else if selectedTab == 'Total Table'}
		<TotalTable {sections} />
	{/if}
</div>
