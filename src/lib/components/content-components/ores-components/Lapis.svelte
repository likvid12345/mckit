<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
</script>

<OreGuide
	name="Lapis Lazuli"
	intro="A deep blue mineral that powers your enchanting table."
	foundAt="Y=-64 to Y=64"
	bestHeight="Y=0"
	minTool="Stone Pickaxe"
	biomes={[
		{
			name: 'Not biome-specific',
			desc: 'Lapis generates the same amount in every Overworld biome — depth is what matters, not location'
		},
		{
			name: 'Stone/Deepslate border',
			desc: 'Y=0 sits right where both distribution batches overlap for the highest concentration'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Multiplies your lapis drops per block. Since lapis drops the resource directly rather than a block, Fortune is always the better pick over Silk Touch."
	fortuneLevels={[
		{ label: 'No Fortune', value: '4–9' },
		{ label: 'Fortune I', value: '8–18' },
		{ label: 'Fortune II', value: '8–27' },
		{ label: 'Fortune III', value: '8–36' }
	]}
	uses={[
		'Enchanting Table fuel — 1 to 3 lapis per enchantment',
		'Blue Dye for wool, glass, concrete, and terracotta',
		'Cartography Table (with Compass)',
		'Trading with Cleric villagers for Emeralds'
	]}
	note="Lapis Lazuli Block (9 lapis) is a handy way to store large amounts compactly — and since Fortune II/III can average more than 9 per block, a single ore vein can sometimes out-produce a full lapis block."
/>
