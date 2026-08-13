<script>
	import Button from '$lib/components/element-components/Button.svelte';

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
		'Luck',
		'Turtle Master',
		'Oozing',
		'Weaving',
		'Infested',
		'Wind Charged'
	]);
</script>

<div class="general-sorter no-padding">
	{#each sortablePotions as potion, i (i)}
		<Button
			class={selectedPotion === potion ? 'selected-button' : ''}
			onclick={() => {
				selectedPotion = potion;
			}}>{potion}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedPotion == 'Regeneration'}
		<p>Regeneration</p>
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
	{:else if selectedPotion == 'Luck'}
		<p>Luck</p>
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
