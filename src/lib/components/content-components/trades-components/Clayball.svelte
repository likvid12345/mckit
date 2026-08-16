<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Clay Ball → Emerald"
	intro="An easy renewable trade if you live near water."
	jobSiteName="Stonecutter"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Iron Ingot' },
		{ label: '' },
		{ label: 'Stone' },
		{ label: 'Stone' },
		{ label: 'Stone' },
		{ label: '' },
		{ label: '' },
		{ label: '' }
	]}
	professionName="Mason"
	give={{ label: 'Clay Ball', amount: 10 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade is guaranteed at Novice level. Clay patches are common near rivers, lakes, and beaches, making this an easy renewable source."
/>
