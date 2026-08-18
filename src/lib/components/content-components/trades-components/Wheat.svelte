<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import wheat from '$lib/assets/trades/wheat.svg';
</script>

<Trade
	title="Wheat → Emerald"
	intro="Turn your wheat farm into a steady emerald income."
	jobSiteName="Composter"
	jobSiteRecipe={[
		{ label: 'Wood Slab' },
		{ label: '' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Slab' },
		{ label: '' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Slab' }
	]}
	professionName="Farmer"
	give={{ label: 'Wheat', amount: 20, icon: wheat }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Trades run out after a limited number of uses. Let the villager sleep in a nearby bed overnight, or wait for the restock timer, to refresh their trades."
/>
