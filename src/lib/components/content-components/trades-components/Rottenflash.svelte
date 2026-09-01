<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import rottenflash from '$lib/assets/trades/rottenflesh.svg';
</script>

<Trade
	title="Rotten Flesh → Emerald"
	intro="Turn zombie farm byproduct into steady emerald income."
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
	give={{ label: 'Rotten Flesh', amount: 32 }}
	receive={{ label: 'Emerald', amount: 1, icon: rottenflash }}
	note="This trade is guaranteed at Novice level — every Cleric offers it. Great way to turn zombie or gold farm byproducts into steady emerald income."
/>
