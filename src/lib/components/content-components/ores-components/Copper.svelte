<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Copper"
	intro="A versatile ore used for redstone builds, decoration, and a few key tools."
	foundAt="Y=-16 to Y=112"
	bestHeight="Y=48"
	minTool="Stone Pickaxe"
	biomes={[
		{
			name: 'Dripstone Caves',
			desc: 'Adds a second, much larger batch of copper veins on top of the normal generation'
		},
		{
			name: 'Any Overworld biome',
			desc: 'Copper generates everywhere underground, so regular caves work too'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Multiplies your raw copper drops per block. Silk Touch is usually the wrong choice here since it just gives you the ore block instead of raw copper."
	fortuneLevels={[
		{ label: 'No Fortune', value: '2–5' },
		{ label: 'Fortune I', value: '2–10' },
		{ label: 'Fortune II', value: '2–15' },
		{ label: 'Fortune III', value: '2–20' }
	]}
	uses={[
		'Lightning Rods',
		'Spyglass',
		'Brushes (for archaeology)',
		'Copper Blocks, Doors, Trapdoors, and Grates',
		'Copper Bulbs — a redstone light component',
		'Decorative blocks that oxidize and change color over time'
	]}
	note="Copper ore requires at least a Stone Pickaxe — mining it with a Wooden Pickaxe destroys the block and gives you nothing."
/>
