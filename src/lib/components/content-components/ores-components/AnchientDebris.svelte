<script>
	import OreGuide from '$lib/components/element-components/OreGuide.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	import AdSlot from '$lib/components/element-components/AdSlot.svelte';
</script>

<OreGuide
	name="Ancient Debris"
	intro="The rarest ore in the game and the key ingredient for upgrading Diamond gear to Netherite."
	foundAt="Y=8 to Y=22 (Nether only)"
	bestHeight="Y=15 to Y=16"
	minTool="Diamond Pickaxe"
	biomes={[
		{
			name: 'Not biome-specific',
			desc: 'Ancient Debris generates throughout the Nether — the biome above you has no effect on its generation'
		},
		{
			name: 'Never exposed to air',
			desc: 'It always generates buried inside blocks, so you will never find Ancient Debris exposed in an open Nether cave'
		}
	]}
	enchantName="None — Fortune doesn't work here"
	enchantDesc="Every Ancient Debris block drops exactly 1 Ancient Debris regardless of Fortune. Since the ore is extremely blast-resistant, TNT and beds are popular ways to clear large areas quickly."
	fortuneLevels={[
		{ label: 'No Fortune', value: '1' },
		{ label: 'Fortune I', value: '1' },
		{ label: 'Fortune II', value: '1' },
		{ label: 'Fortune III', value: '1' }
	]}
	uses={[
		'Smelt into Netherite Scrap',
		'Craft Netherite Ingots with Gold Ingots',
		'Upgrade Diamond tools and weapons',
		'Upgrade Diamond armor',
		'Upgrade Diamond equipment with a Smithing Table'
	]}
	note="Y=15 is one of the best levels for Ancient Debris mining. Beds and TNT can clear huge amounts of netherrack quickly, while Ancient Debris survives the explosions — making it easy to collect afterward."
/>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
</style>
