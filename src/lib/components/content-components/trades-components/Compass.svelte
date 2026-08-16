<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Compass → Emerald"
	intro="A rare 1-for-1 trade — no other item in the game does this."
	jobSiteName="Cartography Table"
	jobSiteRecipe={[
		{ label: 'Paper' },
		{ label: 'Paper' },
		{ label: '' },
		{ label: 'Plank' },
		{ label: 'Plank' },
		{ label: '' },
		{ label: 'Plank' },
		{ label: 'Plank' },
		{ label: '' }
	]}
	professionName="Cartographer"
	give={{ label: 'Compass', amount: 1 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Journeyman level. Since a compass costs 4 Iron Ingots + 1 Redstone Dust to craft, it's not actually a cheap trade despite the 1:1 ratio."
/>
