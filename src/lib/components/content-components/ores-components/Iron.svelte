<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Iron"
	intro="One of the most essential resources for tools, armor, and countless recipes."
	foundAt="Y=-64 to Y=320"
	bestHeight="Y=16 (underground) or Y=232 (mountains)"
	minTool="Stone Pickaxe"
	biomes={[
		{
			name: 'Mountain Biomes',
			desc: 'Huge exposed veins near Y=232 — often visible without any digging'
		},
		{ name: 'Dripstone Caves', desc: 'Iron veins appear more frequently than in regular caves' }
	]}
	enchantName="Fortune"
	enchantDesc="Increases how much raw iron drops per block. Silk Touch is the alternative if you'd rather move the ore block itself instead."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Tools, weapons, and armor',
		'Anvils and Buckets',
		'Shears and Flint and Steel',
		'Rails and Minecarts',
		'Iron Golems (with Pumpkin/Carved Pumpkin)',
		'Iron Doors and Trapdoors',
		'Hoppers and Cauldrons',
		'Compass',
		'Beacon pyramid block'
	]}
	note="Iron drops as Raw Iron when mined — smelt it in a furnace to get an Iron Ingot before crafting anything with it."
/>
