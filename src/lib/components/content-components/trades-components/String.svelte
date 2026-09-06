<script>
	import string from '$lib/assets/trades/string.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	import AdSlot from '$lib/components/element-components/AdSlot.svelte';
</script>

<Trade
	title="String → Emerald"
	intro="A simple way to turn spider drops into emeralds."
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
	give={{ label: 'String', amount: 14, icon: string }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This rate only unlocks once the Fletcher reaches Journeyman level. A Fisherman offers a worse but instant rate — 20 string for 1 emerald right from Novice level."
/>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
</style>
