<script>
	import inksac from '$lib/assets/trades/inksac.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Ink Sac → Emerald"
	intro="A niche but easy trade if you're farming squids anyway."
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
	give={{ label: 'Ink Sac', amount: 5, icon: inksac }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Apprentice level. Paper is a much easier renewable option (24 paper for 1 emerald) if you don't already have a squid farm."
/>
