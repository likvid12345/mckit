<script>
	import wool from '$lib/assets/trades/wool.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
</script>

<Trade
	title="Wool → Emerald"
	intro="A great renewable trade if you're running a sheep farm."
	jobSiteName="Loom"
	jobSiteRecipe={[
		{ label: 'String' },
		{ label: 'String' },
		{ label: '' },
		{ label: 'Wood Plank' },
		{ label: 'Wood Plank' },
		{ label: '' },
		{ label: '' },
		{ label: '' },
		{ label: '' }
	]}
	professionName="Shepherd"
	give={{ label: 'Wool', amount: 18, icon: wool }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade is guaranteed at Novice level, though the color offered is random — white, gray, brown, or black."
/>
