<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Ancient Debris"
	intro="The rarest ore in the game, and the only way to reach Netherite gear."
	foundAt="Y=8 to Y=22 (Nether only)"
	bestHeight="Y=15 to Y=16"
	minTool="Diamond Pickaxe"
	biomes={[
		{
			name: 'Not biome-specific',
			desc: 'Generates anywhere in the Nether — only depth matters, not the biome above it'
		},
		{
			name: 'Never exposed to air',
			desc: "Always buried inside netherrack, basalt, or blackstone — you won't spot it while exploring open caves"
		}
	]}
	enchantName="None — Fortune doesn't work here"
	enchantDesc="Every block always drops exactly 1 Ancient Debris, no matter what enchantment you use. Since it's blast-resistant, most players use TNT or bed explosions to clear netherrack instead of mining block by block."
	uses={[
		'Smelt into Netherite Scrap',
		'Combine 4 Netherite Scrap + 4 Gold Ingots for a Netherite Ingot',
		'Upgrade Diamond gear via a Smithing Table + Netherite Upgrade Template'
	]}
	note="Ancient Debris survives lava and explosions completely undamaged — a huge advantage when bed-mining or TNT-mining, since your loot won't burn or get destroyed in the blast."
/>
