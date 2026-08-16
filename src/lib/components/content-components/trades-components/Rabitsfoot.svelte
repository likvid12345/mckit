<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Rabbit's Foot → Emerald"
	intro="A great rate if your rabbit farm produces feet as a bonus drop."
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
	give={{ label: "Rabbit's Foot", amount: 2 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade unlocks at Journeyman level. Rabbits only have a 10% chance to drop their foot, so this isn't a fast farm — but the 2:1 rate makes it worthwhile when you have extras."
/>
