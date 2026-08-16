<script>
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Tripwire Hook → Emerald"
	intro="The best exchange rate any Fletcher trade offers — but it takes patience to unlock."
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
	give={{ label: 'Tripwire Hook', amount: 8 }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only appears at Master level — the very last tier. You'll need to level the Fletcher up through Stick, Flint, String, and Feather trades first."
/>
