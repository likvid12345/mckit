<script>
	import Button from '$lib/components/element-components/Button.svelte';

	import Regeneration from '$lib/components/content-components/potion-components/Regeneration.svelte';

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
		<p>Healing</p>
	{:else if selectedPotion == 'Swiftness'}
		<p>Swiftness</p>
	{:else if selectedPotion == 'Fire Resistance'}
		<p>Fire Resistance</p>
	{:else if selectedPotion == 'Night Vision'}
		<p>Night Vision</p>
	{:else if selectedPotion == 'Weakness'}
		<p>Weakness</p>
	{:else if selectedPotion == 'Strength'}
		<p>Strength</p>
	{:else if selectedPotion == 'Slowness'}
		<p>Slowness</p>
	{:else if selectedPotion == 'Leaping'}
		<p>Leaping</p>
	{:else if selectedPotion == 'Harming'}
		<p>Harming</p>
	{:else if selectedPotion == 'Water Breathing'}
		<p>Water Breathing</p>
	{:else if selectedPotion == 'Invisibility'}
		<p>Invisibility</p>
	{:else if selectedPotion == 'Poison'}
		<p>Poison</p>
	{:else if selectedPotion == 'Slow Falling'}
		<p>Slow Falling</p>
	{:else if selectedPotion == 'Turtle Master'}
		<p>Turtle Master</p>
	{:else if selectedPotion == 'Oozing'}
		<p>Oozing</p>
	{:else if selectedPotion == 'Weaving'}
		<p>Weaving</p>
	{:else if selectedPotion == 'Infested'}
		<p>Infested</p>
	{:else if selectedPotion == 'Wind Charged'}
		<p>Wind Charged</p>
	{/if}
</div>

<style>
	.potions-wrapper {
		padding: 1rem;
	}
</style>
