<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Quartz"
	intro="A common Nether resource used for redstone components and modern building."
	foundAt="Y=10 to Y=117 (Nether only)"
	bestHeight="No single peak — spread evenly across its range"
	minTool="Any Pickaxe"
	biomes={[
		{
			name: 'Any Nether biome',
			desc: 'Quartz generates the same in Nether Wastes, Crimson Forest, Warped Forest, and more'
		},
		{
			name: 'Basalt Deltas',
			desc: 'Generates more attempts per chunk here to compensate for less netherrack'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how much quartz drops per block. Silk Touch gives you the ore block itself instead — mostly useful for decoration."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Blocks of Quartz and Quartz Pillars — building material',
		'Comparators',
		'Daylight Sensors',
		'Observers',
		'Trading with Mason villagers for Emeralds'
	]}
	note="Quartz can also be obtained by giving Piglins a Gold Ingot — there's a small chance they'll barter back 5 to 12 Nether Quartz."
/>
