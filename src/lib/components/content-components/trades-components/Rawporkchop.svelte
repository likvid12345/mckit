<script>
	import rawporkchop from '$lib/assets/trades/rawporkchop.svg';

	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Raw Porkchop → Emerald"
	intro="A quick and easy way to turn a pig farm into steady emeralds."
	jobSiteName="Smoker"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Wood Log' },
		{ label: '' },
		{ label: 'Wood Log' },
		{ label: 'Furnace' },
		{ label: 'Wood Log' },
		{ label: '' },
		{ label: 'Wood Log' },
		{ label: '' }
	]}
	professionName="Butcher"
	give={{ label: 'Raw Porkchop', amount: 7, icon: rawporkchop }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade has a 40% chance to appear at Novice level. Pig farms are easy to breed with carrots, potatoes, or beetroot, making this a reliable renewable trade."
/>
