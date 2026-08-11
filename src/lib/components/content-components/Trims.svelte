<script>
	import Button from '$lib/components/element-components/Button.svelte';

	let selectedTrim = $state('Sentry');
	let sortableTrims = $state([
		'Sentry',
		'Vex',
		'Wild',
		'Coast',
		'Dune',
		'Wayfinder',
		'Raiser',
		'Shaper',
		'Host',
		'Ward',
		'Silence',
		'Tide',
		'Snout',
		'Rib',
		'Eye',
		'Spire',
		'Flow',
		'Bolt'
	]);
</script>

<div class="general-sorter no-padding">
	{#each sortableTrims as trim, i (i)}
		<Button
			onclick={() => {
				selectedTrim = trim;
			}}>{trim}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedTrim == 'Sentry'}
		<p>Sentry</p>
	{:else if selectedTrim == 'Vex'}
		<p>Vex</p>
	{:else if selectedTrim == 'Wild'}
		<p>Wild</p>
	{:else if selectedTrim == 'Coast'}
		<p>Coast</p>
	{:else if selectedTrim == 'Dune'}
		<p>Dune</p>
	{:else if selectedTrim == 'Wayfinder'}
		<p>Wayfinder</p>
	{:else if selectedTrim == 'Raiser'}
		<p>Raiser</p>
	{:else if selectedTrim == 'Shaper'}
		<p>Shaper</p>
	{:else if selectedTrim == 'Host'}
		<p>Host</p>
	{:else if selectedTrim == 'Ward'}
		<p>Ward</p>
	{:else if selectedTrim == 'Silence'}
		<p>Silence</p>
	{:else if selectedTrim == 'Tide'}
		<p>Tide</p>
	{:else if selectedTrim == 'Snout'}
		<p>Snout</p>
	{:else if selectedTrim == 'Rib'}
		<p>Rib</p>
	{:else if selectedTrim == 'Eye'}
		<p>Eye</p>
	{:else if selectedTrim == 'Spire'}
		<p>Spire</p>
	{:else if selectedTrim == 'Flow'}
		<p>Flow</p>
	{:else if selectedTrim == 'Bolt'}
		<p>Bolt</p>
	{/if}
</div>
