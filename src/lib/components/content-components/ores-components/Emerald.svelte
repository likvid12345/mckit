<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	import AdSlot from '$lib/components/element-components/AdSlot.svelte';
</script>

<OreGuide
	name="Emerald"
	intro="The rarest Overworld gem, found almost exclusively in mountains and used as Minecraft's main trading currency."
	foundAt="Y=-16 to Y=320 (Mountain biomes only)"
	bestHeight="Y=232"
	minTool="Iron Pickaxe"
	biomes={[
		{
			name: 'Windswept Hills',
			desc: 'Common mountain biome with exposed stone where emerald ore can be spotted without much digging'
		},
		{
			name: 'Stony Peaks',
			desc: 'Bare stone terrain exposes large areas, making emerald ore unusually easy to spot'
		}
	]}
	enchantName="Fortune"
	enchantDesc="Increases how many emeralds drop per block. Emerald ore generates as individual blocks rather than large veins, so Fortune is especially valuable when mining for emeralds."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1–2' },
		{ label: 'Fortune II', value: '1–3' },
		{ label: 'Fortune III', value: '1–4' }
	]}
	uses={[
		'Trading currency with villagers',
		'Trading with Wandering Traders',
		'Emerald Blocks for beacon pyramids',
		'Decorative Emerald Blocks'
	]}
	note="Emerald ore only generates in Mountain-family biomes. For actually building up a large emerald supply, villager trading is usually much faster than mining — especially once you have renewable crops, farms, or a good trading hall."
/>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
</style>
