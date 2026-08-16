<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import potato from '$lib/assets/trades/potato.svg';
</script>

<Trade
	title="Potato → Emerald"
	intro="Another simple crop trade to keep your emerald stash growing."
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
	give={{ label: 'Potato', amount: 26, icon: potato }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Trades run out after a limited number of uses. Let the villager sleep in a nearby bed overnight, or wait for the restock timer, to refresh their trades."
/>
