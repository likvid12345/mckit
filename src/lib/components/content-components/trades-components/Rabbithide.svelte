<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Rabbit Hide → Emerald"
	intro="A steady source of emeralds if you've got a rabbit farm going."
	jobSiteName="Cauldron"
	jobSiteRecipe={[
		{ label: 'Iron Ingot' },
		{ label: '' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: '' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' }
	]}
	professionName="Leatherworker"
	give={{ label: 'Rabbit Hide', amount: 9 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks once the Leatherworker reaches Journeyman level. You can also craft 4 Rabbit Hide into 1 Leather and sell that instead, at a slightly better rate."
/>
