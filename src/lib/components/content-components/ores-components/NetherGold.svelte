<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Nether Gold"
	intro="A Nether-exclusive gold source that drops nuggets instead of raw gold."
	foundAt="Y=10 to Y=117 (Nether only)"
	bestHeight="No single peak — spread evenly across its range"
	minTool="Any Pickaxe"
	biomes={[
		{
			name: 'Any Nether biome',
			desc: 'Generates the same across Nether Wastes, Crimson Forest, and more'
		},
		{ name: 'Basalt Deltas', desc: 'Doubles the vein count compared to other biomes' }
	]}
	enchantName="Fortune"
	enchantDesc="Increases how many gold nuggets drop per block. Since the average with Fortune III is still less than a full ingot, Silk Touch and smelting is actually the more efficient choice if you want ingots."
	fortuneLevels={[
		{ label: 'No Fortune', value: '2–6' },
		{ label: 'Fortune I', value: '4–12' },
		{ label: 'Fortune II', value: '4–18' },
		{ label: 'Fortune III', value: '4–24' }
	]}
	uses={[
		'Smelting into Gold Nuggets (already dropped as nuggets)',
		'Crafting Golden Apples and Golden Carrots',
		'Piglin bartering ingredient',
		'Repairing gold tools and armor'
	]}
	note="Mining Nether Gold Ore angers nearby Piglins — even while wearing gold armor. Be ready for a fight before you start swinging."
/>
