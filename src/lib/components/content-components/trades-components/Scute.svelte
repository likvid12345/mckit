<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Scute → Emerald"
	intro="A niche but steady trade if you're already running a turtle farm."
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
	give={{ label: 'Scute', amount: 4 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Expert level. Clerics offer the exact same rate — 4 scutes for 1 emerald — if you'd rather use a Brewing Stand villager instead."
/>
