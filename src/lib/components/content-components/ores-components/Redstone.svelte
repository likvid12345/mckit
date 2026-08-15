<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Redstone"
	intro="Powers pistons, circuits, and every automated contraption in the game."
	foundAt="Y=-64 to Y=15"
	bestHeight="Y=-59"
	minTool="Iron Pickaxe"
	biomes={[
		{
			name: 'Not biome-specific',
			desc: 'Redstone generates identically in every Overworld biome — only depth matters'
		},
		{
			name: 'Deep overlap zone',
			desc: 'Y=-63 to -32 combines two generation batches, making it the densest band'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how much redstone dust drops per block. Silk Touch gives you the ore block itself instead of dust — mostly useful for decoration."
	fortuneLevels={[
		{ label: 'No Fortune', value: '4–5' },
		{ label: 'Fortune I', value: '4–6' },
		{ label: 'Fortune II', value: '4–7' },
		{ label: 'Fortune III', value: '4–8' }
	]}
	uses={[
		'Redstone Dust for circuits and wiring',
		'Pistons and Sticky Pistons',
		'Repeaters and Comparators',
		'Redstone Torches and Lamps',
		'Powered Rails',
		'Compass and Clock',
		'Trading with Cleric villagers'
	]}
	note="Redstone ore glows and drops sparkling particles when stepped on or hit — useful for spotting it in the dark from a distance."
/>
