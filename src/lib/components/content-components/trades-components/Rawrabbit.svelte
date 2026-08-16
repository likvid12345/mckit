<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Raw Rabbit → Emerald"
	intro="The best raw meat exchange rate a Butcher offers."
	jobSiteName="Smoker"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Log' },
		{ label: '' },
		{ label: 'Log' },
		{ label: 'Furnace' },
		{ label: 'Log' },
		{ label: '' },
		{ label: 'Log' },
		{ label: '' }
	]}
	professionName="Butcher"
	give={{ label: 'Raw Rabbit', amount: 4 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade has a 40% chance to appear at Novice level. Rabbits breed slower than pigs or chickens, so this rate is great, but harder to farm at scale."
/>
