<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Nether Gold"
	intro="A Nether-exclusive gold source that drops gold nuggets and can turn dangerous caves into a steady gold supply."
	foundAt="Y=10 to Y=117 (Nether only)"
	bestHeight="No single peak — spread evenly across its range"
	minTool="Any Pickaxe"
	biomes={[
		{
			name: 'Any Nether biome',
			desc: 'Nether Gold Ore generates throughout the Nether, including Nether Wastes, Crimson Forests, and Warped Forests'
		},
		{
			name: 'Basalt Deltas',
			desc: 'Generates more frequently here than in other Nether biomes, making the dangerous terrain surprisingly rewarding'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases the number of Gold Nuggets dropped per block. Fortune III can produce a large number of nuggets, but Silk Touch can be useful if you want to smelt the ore into Gold Ingots."
	fortuneLevels={[
		{ label: 'No Fortune', value: '2–6' },
		{ label: 'Fortune I', value: '4–12' },
		{ label: 'Fortune II', value: '4–18' },
		{ label: 'Fortune III', value: '4–24' }
	]}
	uses={[
		'Gold Nuggets for crafting',
		'Golden Apples and Golden Carrots',
		'Piglin bartering',
		'Gold Ingots and Gold Blocks',
		'Gold tools, weapons, and armor'
	]}
	note="Mining Nether Gold Ore normally angers nearby Piglins, even if you're wearing gold armor. Mine carefully, block yourself in when necessary, or use Silk Touch if you want to avoid the immediate nugget drops."
/>
