<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Amethyst"
	intro="A decorative crystal found inside geodes, used for Spyglasses and Tinted Glass."
	foundAt="Y=-58 to Y=30 (inside Geode structures)"
	bestHeight="Y=-40 to Y=-58"
	minTool="Any Pickaxe"
	biomes={[
		{
			name: 'Not biome-specific',
			desc: 'Geodes generate anywhere underground — look for a smooth basalt shell with a visible crack'
		},
		{
			name: 'Deepslate layer',
			desc: "Geodes are denser near Y=-40 to -58, where there's less competition from cave generation"
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases shard drops from fully grown clusters. Silk Touch drops the cluster block itself instead of shards — useful for decoration, not farming."
	fortuneLevels={[
		{ label: 'No Fortune', value: '4' },
		{ label: 'Fortune I', value: '4 or 8' },
		{ label: 'Fortune II', value: '4, 8 or 12' },
		{ label: 'Fortune III', value: '4, 8, 12 or 16' }
	]}
	uses={[
		'Spyglass (with Copper Ingots)',
		'Tinted Glass (with Glass)',
		'Block of Amethyst — decorative',
		'Calibrated Sculk Sensors'
	]}
	note="Only fully grown clusters drop shards — small, medium, and large buds drop nothing. Never mine the budding amethyst block itself; it's what keeps growing new clusters over time."
/>
