<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Dye → Emerald"
	intro="A flexible trade — any color counts, so leftover dyes never go to waste."
	jobSiteName="Loom"
	jobSiteRecipe={[
		{ label: 'String' },
		{ label: 'String' },
		{ label: '' },
		{ label: 'Plank' },
		{ label: 'Plank' },
		{ label: '' },
		{ label: '' },
		{ label: '' },
		{ label: '' }
	]}
	professionName="Shepherd"
	give={{ label: 'Dye', amount: 12 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade unlocks at Apprentice level. Any of the 16 dye colors counts toward this trade, though which colors are accepted expands further at Journeyman and Expert levels."
/>
