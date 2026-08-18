<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Raw Chicken → Emerald"
	intro="A steady trade if you've got a chicken farm running."
	jobSiteName="Smoker"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Wood Log' },
		{ label: '' },
		{ label: 'Wood Log' },
		{ label: 'Furnace' },
		{ label: 'Wood Log' },
		{ label: '' },
		{ label: 'Wood Log' },
		{ label: '' }
	]}
	professionName="Butcher"
	give={{ label: 'Raw Chicken', amount: 14 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade has a 50% chance to appear at Novice level. Raw Porkchop is a better rate (7:1) if your farm supports both animals."
/>
