<script>
	import Button from '$lib/components/element-components/Button.svelte';

	import Footer from '$lib/components/element-components/Footer.svelte';

	import Regeneration from '$lib/components/content-components/potion-components/Regeneration.svelte';
	import Healing from '$lib/components/content-components/potion-components/Healing.svelte';
	import Swiftness from '$lib/components/content-components/potion-components/Swiftness.svelte';
	import FireResistance from '$lib/components/content-components/potion-components/FireResistance.svelte';
	import NightVision from '$lib/components/content-components/potion-components/NightVision.svelte';
	import Weakness from '$lib/components/content-components/potion-components/Weakness.svelte';
	import Strength from '$lib/components/content-components/potion-components/Strength.svelte';
	import Slowness from '$lib/components/content-components/potion-components/Slowness.svelte';
	import Leaping from '$lib/components/content-components/potion-components/Leaping.svelte';
	import Harming from '$lib/components/content-components/potion-components/Harming.svelte';
	import WaterBreathing from '$lib/components/content-components/potion-components/WaterBreathing.svelte';
	import Invisibility from '$lib/components/content-components/potion-components/Invisibility.svelte';
	import Poison from '$lib/components/content-components/potion-components/Poison.svelte';
	import SlowFalling from '$lib/components/content-components/potion-components/SlowFalling.svelte';
	import TurtleMaster from '$lib/components/content-components/potion-components/TurtleMaster.svelte';
	import Oozing from '$lib/components/content-components/potion-components/Oozing.svelte';
	import Weaving from '$lib/components/content-components/potion-components/Weaving.svelte';
	import Infested from '$lib/components/content-components/potion-components/Infested.svelte';
	import WindCharged from '$lib/components/content-components/potion-components/WindCharged.svelte';
	import fireres from '$lib/assets/potions/fireres.svg';
	import harming from '$lib/assets/potions/harming.svg';
	import healing from '$lib/assets/potions/healing.svg';
	import infestation from '$lib/assets/potions/infestation.svg';
	import invisibility from '$lib/assets/potions/invisibility.svg';
	import leaping from '$lib/assets/potions/leaping.svg';
	import nightvis from '$lib/assets/potions/nightvis.svg';
	import oozing from '$lib/assets/potions/oozing.svg';
	import poison from '$lib/assets/potions/poison.svg';
	import regeneration from '$lib/assets/potions/regeneration.svg';
	import slowfalling from '$lib/assets/potions/slowfalling.svg';
	import slowness from '$lib/assets/potions/slowness.svg';
	import strength from '$lib/assets/potions/strength.svg';
	import swiftness from '$lib/assets/potions/swiftness.svg';
	import waterbreathing from '$lib/assets/potions/waterbreathing.svg';
	import weakness from '$lib/assets/potions/weakness.svg';
	import weaving from '$lib/assets/potions/weaving.svg';
	import windcharged from '$lib/assets/potions/windcharged.svg';
	import turtlemaster from '$lib/assets/potions/turtlemaster.svg';
	let selectedPotion = $state('Regeneration');
	let sortablePotions = $state([
		'Regeneration',
		'Healing',
		'Swiftness',
		'Fire Resistance',
		'Night Vision',
		'Weakness',
		'Strength',
		'Slowness',
		'Leaping',
		'Harming',
		'Water Breathing',
		'Invisibility',
		'Poison',
		'Slow Falling',
		'Turtle Master',
		'Oozing',
		'Weaving',
		'Infested',
		'Wind Charged'
	]);
</script>

<div class="general-sorter">
	{#each sortablePotions as potion, i (i)}
		<Button
			class={selectedPotion === potion ? 'selected-button' : ''}
			onclick={() => {
				selectedPotion = potion;
			}}
		>
			{#if potion == 'Regeneration'}
				<img class="general-sorter-image" src={regeneration} alt="regeneration" />
			{:else if potion == 'Healing'}
				<img class="general-sorter-image" src={healing} alt="healing" />
			{:else if potion == 'Swiftness'}
				<img class="general-sorter-image" src={swiftness} alt="swiftness" />
			{:else if potion == 'Fire Resistance'}
				<img class="general-sorter-image" src={fireres} alt="fireres" />
			{:else if potion == 'Night Vision'}
				<img class="general-sorter-image" src={nightvis} alt="nightvis" />
			{:else if potion == 'Weakness'}
				<img class="general-sorter-image" src={weakness} alt="weakness" />
			{:else if potion == 'Strength'}
				<img class="general-sorter-image" src={strength} alt="strength" />
			{:else if potion == 'Slowness'}
				<img class="general-sorter-image" src={slowness} alt="slowness" />
			{:else if potion == 'Leaping'}
				<img class="general-sorter-image" src={leaping} alt="leaping" />
			{:else if potion == 'Harming'}
				<img class="general-sorter-image" src={harming} alt="harming" />
			{:else if potion == 'Water Breathing'}
				<img class="general-sorter-image" src={waterbreathing} alt="waterbreathing" />
			{:else if potion == 'Invisibility'}
				<img class="general-sorter-image" src={invisibility} alt="invisibility" />
			{:else if potion == 'Poison'}
				<img class="general-sorter-image" src={poison} alt="poison" />
			{:else if potion == 'Slow Falling'}
				<img class="general-sorter-image" src={slowfalling} alt="slowfalling" />
			{:else if potion == 'Oozing'}
				<img class="general-sorter-image" src={oozing} alt="oozing" />
			{:else if potion == 'Weaving'}
				<img class="general-sorter-image" src={weaving} alt="weaving" />
			{:else if potion == 'Infested'}
				<img class="general-sorter-image" src={infestation} alt="infestation" />
			{:else if potion == 'Wind Charged'}
				<img class="general-sorter-image" src={windcharged} alt="windcharged" />
			{:else if potion == 'Turtle Master'}
				<img class="general-sorter-image" src={turtlemaster} alt="turtlemaster" />
			{/if}
			{potion}</Button
		>
	{/each}
</div>

<div class="potions-wrapper">
	{#if selectedPotion == 'Regeneration'}
		<Regeneration />
	{:else if selectedPotion == 'Healing'}
		<Healing />
	{:else if selectedPotion == 'Swiftness'}
		<Swiftness />
	{:else if selectedPotion == 'Fire Resistance'}
		<FireResistance />
	{:else if selectedPotion == 'Night Vision'}
		<NightVision />
	{:else if selectedPotion == 'Weakness'}
		<Weakness />
	{:else if selectedPotion == 'Strength'}
		<Strength />
	{:else if selectedPotion == 'Slowness'}
		<Slowness />
	{:else if selectedPotion == 'Leaping'}
		<Leaping />
	{:else if selectedPotion == 'Harming'}
		<Harming />
	{:else if selectedPotion == 'Water Breathing'}
		<WaterBreathing />
	{:else if selectedPotion == 'Invisibility'}
		<Invisibility />
	{:else if selectedPotion == 'Poison'}
		<Poison />
	{:else if selectedPotion == 'Slow Falling'}
		<SlowFalling />
	{:else if selectedPotion == 'Turtle Master'}
		<TurtleMaster />
	{:else if selectedPotion == 'Oozing'}
		<Oozing />
	{:else if selectedPotion == 'Weaving'}
		<Weaving />
	{:else if selectedPotion == 'Infested'}
		<Infested />
	{:else if selectedPotion == 'Wind Charged'}
		<WindCharged />
	{/if}
</div>
<Footer />
