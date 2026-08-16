<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Nether Wart → Emerald"
	intro="A niche late-game trade once your Cleric is fully leveled up."
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
	give={{ label: 'Nether Wart', amount: 22 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Master level — the highest tier. You'll need to level the Cleric through Rotten Flesh, Gold Ingot, and Rabbit's Foot trades first."
/>
