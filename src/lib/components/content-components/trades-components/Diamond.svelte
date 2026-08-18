<script>
	import diamond from '$lib/assets/trades/diamond.svg';

	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Diamond → Emerald"
	intro="A rare 1-for-1 trade, though rarely worth it given how valuable diamonds are."
	jobSiteName="Blast Furnace"
	jobSiteRecipe={[
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Furnace' },
		{ label: 'Iron Ingot' },
		{ label: 'Smooth Stone' },
		{ label: 'Smooth Stone' },
		{ label: 'Smooth Stone' }
	]}
	professionName="Armorer"
	give={{ label: 'Diamond', amount: 1, icon: diamond }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Journeyman level. Since diamonds are far more valuable than emeralds, this trade is rarely worth it — it's here mostly for completeness."
/>
