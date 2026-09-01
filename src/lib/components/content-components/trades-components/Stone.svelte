<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import stone from '$lib/assets/trades/stone.svg';
</script>

<Trade
	title="Stone → Emerald"
	intro="An endless emerald source — every strip mine leaves you with plenty of stone."
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
	give={{ label: 'Stone', amount: 20, icon: stone }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade is guaranteed at Novice level. Smelt spare cobblestone in a furnace to turn it into stone — an easy way to keep this trade stocked."
/>
