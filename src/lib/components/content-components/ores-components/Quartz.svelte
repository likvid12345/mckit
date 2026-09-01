<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Quartz"
	intro="A common Nether resource used for redstone components, trading, and clean modern building."
	foundAt="Y=10 to Y=117 (Nether only)"
	bestHeight="No single peak — spread evenly across its range"
	minTool="Any Pickaxe"
	biomes={[
		{
			name: 'Any Nether biome',
			desc: 'Nether Quartz Ore generates throughout the Nether, so you can mine it in almost any environment'
		},
		{
			name: 'Basalt Deltas',
			desc: 'Quartz has more generation attempts here, making it a surprisingly productive place to mine despite the rough terrain'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how much Nether Quartz drops from each ore block. Fortune is especially useful when gathering quartz for large redstone projects or building materials."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Blocks of Quartz and Quartz Pillars',
		'Comparators',
		'Daylight Sensors',
		'Observers',
		'Trading with Mason villagers for Emeralds',
		'Decorative building and interior designs'
	]}
	note="Don't want to mine for quartz? Piglins can barter Nether Quartz when given Gold Ingots, giving you another renewable way to stock up while exploring the Nether."
/>
