<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="String → Emerald"
	intro="A simple way to turn spider drops into emeralds."
	jobSiteName="Fletching Table"
	jobSiteRecipe={[
		{ label: 'Flint' },
		{ label: 'Flint' },
		{ label: '' },
		{ label: 'Plank' },
		{ label: 'Plank' },
		{ label: '' },
		{ label: 'Plank' },
		{ label: 'Plank' },
		{ label: '' }
	]}
	professionName="Fletcher"
	give={{ label: 'String', amount: 14 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This rate only unlocks once the Fletcher reaches Journeyman level. A Fisherman offers a worse but instant rate — 20 string for 1 emerald right from Novice level."
/>
