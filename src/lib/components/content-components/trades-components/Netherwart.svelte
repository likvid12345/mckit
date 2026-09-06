<script>
	import netherwart from '$lib/assets/trades/netherwart.svg';
	import Trade from '$lib/components/element-components/Trade.svelte';
	import Footer from '$lib/components/element-components/Footer.svelte';
	import AdSlot from '$lib/components/element-components/AdSlot.svelte';
</script>

<Trade
	title="Nether Wart → Emerald"
	intro="A niche late-game trade once your Cleric is fully leveled up."
	jobSiteName="Brewing Stand"
	jobSiteRecipe={[
		{ label: '' },
		{ label: 'Blaze Rod' },
		{ label: '' },
		{ label: '' },
		{ label: '' },
		{ label: '' },
		{ label: 'Cobblestone' },
		{ label: 'Cobblestone' },
		{ label: 'Cobblestone' }
	]}
	professionName="Cleric"
	give={{ label: 'Nether Wart', amount: 22, icon: netherwart }}
	receive={{ label: 'Emerald', amount: 1 }}
	note="This trade only unlocks at Master level — the highest tier. You'll need to level the Cleric through Rotten Flesh, Gold Ingot, and Rabbit's Foot trades first."
/>
<AdSlot />
<Footer />
<div class="separator"></div>

<style>
	.separator {
		height: 100px;
	}
</style>
