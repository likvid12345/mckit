<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Feather → Emerald"
	intro="Turn chicken farm byproducts into steady emerald income."
	jobSiteName="Fletching Table"
	jobSiteRecipe={[
		{ label: 'Flint' },
		{ label: 'Flint' },
		{ label: '' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' },
		{ label: '' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' },
		{ label: '' }
	]}
	professionName="Fletcher"
	give={{ label: 'Feather', amount: 24 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks once the Fletcher reaches Expert level — you'll need to trade with them a few times first to level them up."
/>
