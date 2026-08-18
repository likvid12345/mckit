<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Beetroot → Emerald"
	intro="The best crop-to-emerald ratio a Farmer offers."
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
	give={{ label: 'Beetroot', amount: 15 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Trades run out after a limited number of uses. Let the villager sleep in a nearby bed overnight, or wait for the restock timer, to refresh their trades."
/>
