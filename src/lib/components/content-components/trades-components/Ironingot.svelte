<script>
	import ironingot from '$lib/assets/trades/ironingot.svg';

	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Iron Ingot → Emerald"
	intro="One of the best trades if you're running an iron farm."
	jobSiteName="Smithing Table"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: '' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' },
		{ label: '' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' }
	]}
	professionName="Toolsmith"
	give={{ label: 'Iron Ingot', amount: 4, icon: ironingot }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Armorer (Blast Furnace) and Weaponsmith (Grindstone) offer the exact same rate — 4 iron for 1 emerald — so use whichever job site block you already have set up."
/>
