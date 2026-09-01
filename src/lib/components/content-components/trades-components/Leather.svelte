<script>
	import leather from '$lib/assets/trades/leather.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Leather → Emerald"
	intro="Turn cow or horse farm byproducts into steady emerald income."
	jobSiteName="Cauldron"
	jobSiteRecipe={[
		{ label: 'Iron Ingot' },
		{ label: '' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: '' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' },
		{ label: 'Iron Ingot' }
	]}
	professionName="Leatherworker"
	give={{ label: 'Leather', amount: 6, icon: leather }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade has a 2/3 chance to appear at Novice level in Java Edition, and always appears in Bedrock Edition."
/>
