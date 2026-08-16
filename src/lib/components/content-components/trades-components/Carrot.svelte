<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import carrot from '$lib/assets/trades/carrot.svg';
</script>

<Trade
	title="Carrot → Emerald"
	intro="Yet another easy Farmer trade to add to your emerald income."
	jobSiteName="Composter"
	jobSiteRecipe={[
		{ label: 'Slab' },
		{ label: '' },
		{ label: 'Slab' },
		{ label: 'Slab' },
		{ label: '' },
		{ label: 'Slab' },
		{ label: 'Slab' },
		{ label: 'Slab' },
		{ label: 'Slab' }
	]}
	professionName="Farmer"
	give={{ label: 'Carrot', amount: 22, icon: carrot }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Trades run out after a limited number of uses. Let the villager sleep in a nearby bed overnight, or wait for the restock timer, to refresh their trades."
/>
