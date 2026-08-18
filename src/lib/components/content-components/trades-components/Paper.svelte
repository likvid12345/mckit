<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import paper from '$lib/assets/trades/paper.svg';
</script>

<Trade
	title="Paper → Emerald"
	intro="One of the easiest renewable emerald sources — sugar cane grows almost anywhere."
	jobSiteName="Lectern"
	jobSiteRecipe={[
		{ label: 'Wood Slab' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Slab' },
		{ label: '' },
		{ label: 'Bookshelf' },
		{ label: '' },
		{ label: '' },
		{ label: 'Wood Slab' },
		{ label: '' }
	]}
	professionName="Librarian"
	give={{ label: 'Paper', amount: 24, icon: paper }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Curing a zombified Librarian can push this rate down significantly — some players report it dropping close to 18 paper per emerald."
/>
