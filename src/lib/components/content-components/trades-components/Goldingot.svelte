<script>
	import goldingot from '$lib/assets/trades/goldingot.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Gold Ingot → Emerald"
	intro="A solid trade if you're running a gold farm in the Nether."
	jobSiteName="Brewing Stand"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Blaze Rod' },
		{ label: '' },
		{ label: '' },
		{ label: '' },
		{ label: '' },
		{ label: 'Cobblestone' },
		{ label: 'Cobblestone' },
		{ label: 'Cobblestone' }
	]}
	professionName="Cleric"
	give={{ label: 'Gold Ingot', amount: 3, icon: goldingot }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade unlocks at Apprentice level. Gold isn't especially useful outside this trade, so it's a great way to turn Nether gold farm output into emeralds."
/>
