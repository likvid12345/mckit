<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Coal"
	intro="One of the most common and useful resources in the game."
	foundAt="Y=0 to Y=320"
	bestHeight="Y=96"
	minTool="Wooden Pickaxe"
	biomes={[
		{
			name: 'Windswept Hills',
			desc: 'Exposed stone cliffs make coal easy to spot without mining'
		},
		{ name: 'Mountains', desc: 'Tall peaks expose ore veins across a huge height range' }
	]}
	enchantName="Fortune"
	enchantDesc="Increases how much coal drops per block. Silk Touch works too, but isn't very useful here since coal already drops as an item without needing to be smelted."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Torches',
		'Furnace and Blast Furnace fuel — smelts up to 8 items',
		'Campfires',
		'Fire Charges',
		'Trading with Fisherman villagers',
		'Block of Coal — compact storage, stronger fuel'
	]}
	note="No Coal yet? Smelt any log or wood in a furnace to get Charcoal — it works as a substitute in almost every recipe."
/>
