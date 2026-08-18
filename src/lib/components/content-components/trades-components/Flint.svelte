<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
	import flint from '$lib/assets/trades/flint.svg';
</script>

<Trade
	title="Flint → Emerald"
	intro="A solid way to cash in spare flint from gravel mining."
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
	give={{ label: 'Flint', amount: 26, icon: flint }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This rate unlocks at Apprentice level. Weaponsmiths and Toolsmiths also buy flint, but at worse rates — 24 to 30 flint for 1 emerald depending on their level."
/>
