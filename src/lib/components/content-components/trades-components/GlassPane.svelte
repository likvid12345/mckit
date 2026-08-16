<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Glass Pane → Emerald"
	intro="A cheap, renewable way to turn sand into a steady emerald income."
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
	give={{ label: 'Glass Pane', amount: 11 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Apprentice level. Sand is essentially free near any beach or desert, making this an easy renewable emerald source once the Cartographer is leveled up."
/>
