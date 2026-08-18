<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import stick from '$lib/assets/trades/stick.svg';
</script>

<Trade
	title="Stick → Emerald"
	intro="One of the cheapest and most renewable emerald sources in the game."
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
	give={{ label: 'Stick', amount: 32, icon: stick }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade has about a 67% chance to appear at Novice level in Java Edition, and always appears in Bedrock Edition. If it doesn't show up, break and replace the Fletching Table to re-roll a new villager."
/>
