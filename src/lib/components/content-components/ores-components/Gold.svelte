<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Gold"
	intro="A soft, shiny metal used in tools, enchanting-adjacent trades, and a few surprising recipes."
	foundAt="Y=-64 to Y=32 (Badlands: also Y=32 to Y=256)"
	bestHeight="Y=-16"
	minTool="Iron Pickaxe"
	biomes={[
		{
			name: 'Badlands (Mesa)',
			desc: 'Extra gold generates almost anywhere near the surface — visible in cliff faces without digging'
		},
		{
			name: 'Regular caves',
			desc: 'Standard generation peaks around Y=-16, mixed in with redstone and diamonds'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how much raw gold drops per block. Silk Touch is the alternative if you'd rather move the ore block itself instead."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Golden Apples and Enchanted Golden Apples',
		'Golden Carrots',
		'Powered Rails',
		'Clocks',
		'Bartering with Piglins in the Nether',
		'Trading with Cleric villagers',
		'Beacon pyramid block'
	]}
	note="Gold armor lets Piglins ignore you in the Nether — worth keeping a set on hand even though gold tools and armor are weak."
/>
