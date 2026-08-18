<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import coal from '$lib/assets/trades/coal.svg';
</script>

<Trade
	title="Coal → Emerald"
	intro="A great way to turn spare coal into emeralds early on."
	jobSiteName="Barrel"
	jobSiteRecipe={[
		{ label: 'Wood Plank' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' },
		{ label: '' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Slab' },
		{ label: 'Wood Plank' }
	]}
	professionName="Fisherman"
	give={{ label: 'Coal', amount: 10, icon: coal }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="Toolsmith and Armorer villagers also buy coal, but at a worse rate — 15 coal for 1 emerald instead of 10."
/>
