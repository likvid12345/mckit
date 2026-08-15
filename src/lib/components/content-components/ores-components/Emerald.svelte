<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Emerald"
	intro="The rarest overworld gem, tied to a single family of biomes and worth more than diamond ounce-for-ounce."
	foundAt="Y=-16 to Y=320 (Mountain biomes only)"
	bestHeight="Y=232"
	minTool="Iron Pickaxe"
	biomes={[
		{
			name: 'Windswept Hills',
			desc: 'Common mountain biome with exposed stone where emerald is easy to spot'
		},
		{
			name: 'Stony Peaks',
			desc: 'Bare stone surfaces make emerald ore visible without any digging'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how many emeralds drop per block. Emerald generates as single blocks rather than veins, so Fortune's multiplier matters even more here than on ores you find in bulk."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Trading currency with all villagers',
		'Enchanting-table decoration',
		'Beacon pyramid block'
	]}
	note="Emerald only spawns in Mountain-family biomes — Windswept Hills, Meadow, Grove, Snowy Slopes, Jagged Peaks, Frozen Peaks, and Stony Peaks. It won't generate anywhere else, no matter how deep you dig. For most players, trading wheat or other goods with villagers is a faster way to stack emeralds than mining."
/>
