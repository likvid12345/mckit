<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Diamond"
	intro="The most sought-after resource in the game — top-tier tools, armor, and enchanting."
	foundAt="Y=-64 to Y=16"
	bestHeight="Y=-59"
	minTool="Iron Pickaxe"
	biomes={[
		{
			name: 'Not biome-specific',
			desc: 'Diamond spawns identically in every biome — only depth affects your odds'
		},
		{
			name: 'Deepslate layer',
			desc: 'Below Y=0, diamonds become far more common than in the stone layer above'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how many diamonds drop per block. If you find diamonds before getting Fortune III, mine them with Silk Touch instead and save the blocks — breaking them later with Fortune III still gives you the full bonus."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Diamond tools, weapons, and armor',
		'Enchanting Table (with Obsidian and Book)',
		'Jukebox',
		'Netherite gear — combined with Netherite Ingots',
		'Trading with Cleric and Toolsmith villagers'
	]}
	note="Watch out for lava at this depth. Mine at Y=-53 or -54 instead of Y=-59 if lava keeps ruining your runs — you'll find slightly fewer diamonds, but far less risk."
/>
