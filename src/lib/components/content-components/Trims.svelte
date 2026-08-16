<script>
	import Button from '$lib/components/element-components/Button.svelte';

	import Sentry from '$lib/components/content-components/trims-components/Sentry.svelte';
	import Vex from '$lib/components/content-components/trims-components/Vex.svelte';
	import Wild from '$lib/components/content-components/trims-components/Wild.svelte';
	import Coast from '$lib/components/content-components/trims-components/Coast.svelte';
	import Dune from '$lib/components/content-components/trims-components/Dune.svelte';
	import Wayfinder from '$lib/components/content-components/trims-components/Wayfinder.svelte';
	import Raiser from '$lib/components/content-components/trims-components/Raiser.svelte';
	import Shaper from '$lib/components/content-components/trims-components/Shaper.svelte';
	import Host from '$lib/components/content-components/trims-components/Host.svelte';
	import Ward from '$lib/components/content-components/trims-components/Ward.svelte';
	import Silence from '$lib/components/content-components/trims-components/Silence.svelte';
	import Tide from '$lib/components/content-components/trims-components/Tide.svelte';
	import Rib from '$lib/components/content-components/trims-components/Rib.svelte';
	import Snout from '$lib/components/content-components/trims-components/Snout.svelte';
	import Eye from '$lib/components/content-components/trims-components/Eye.svelte';
	import Spire from '$lib/components/content-components/trims-components/Spire.svelte';
	import Flow from '$lib/components/content-components/trims-components/Flow.svelte';
	import Bolt from '$lib/components/content-components/trims-components/Bolt.svelte';

	import sentry from '$lib/assets/trims/sentry.svg';
	import dune from '$lib/assets/trims/dune.svg';
	import coast from '$lib/assets/trims/coast.svg';
	import wild from '$lib/assets/trims/wild.svg';
	import ward from '$lib/assets/trims/ward.svg';
	import silence from '$lib/assets/trims/silence.svg';
	import eye from '$lib/assets/trims/eye.svg';
	import vex from '$lib/assets/trims/vex.svg';
	import tide from '$lib/assets/trims/tide.svg';
	import snout from '$lib/assets/trims/snout.svg';
	import rib from '$lib/assets/trims/rib.svg';
	import spire from '$lib/assets/trims/spire.svg';
	import wayfinder from '$lib/assets/trims/wayfinder.svg';
	import shaper from '$lib/assets/trims/shaper.svg';
	import raiser from '$lib/assets/trims/raiser.svg';
	import host from '$lib/assets/trims/host.svg';
	import flow from '$lib/assets/trims/flow.svg';
	import bolt from '$lib/assets/trims/bolt.svg';

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

<div class="general-sorter">
	{#each sortableTrims as trim, i (i)}
		<Button
			class={selectedTrim === trim ? 'selected-button' : ''}
			onclick={() => {
				selectedTrim = trim;
			}}
		>
			{#if trim == 'Sentry'}
				<img class="general-sorter-image" src={sentry} alt="sentry" />
			{:else if trim == 'Dune'}
				<img class="general-sorter-image" src={dune} alt="dune" />
			{:else if trim == 'Coast'}
				<img class="general-sorter-image" src={coast} alt="coast" />
			{:else if trim == 'Wild'}
				<img class="general-sorter-image" src={wild} alt="wild" />
			{:else if trim == 'Ward'}
				<img class="general-sorter-image" src={ward} alt="ward" />
			{:else if trim == 'Eye'}
				<img class="general-sorter-image" src={eye} alt="eye" />
			{:else if trim == 'Vex'}
				<img class="general-sorter-image" src={vex} alt="vex" />
			{:else if trim == 'Tide'}
				<img class="general-sorter-image" src={tide} alt="tide" />
			{:else if trim == 'Snout'}
				<img class="general-sorter-image" src={snout} alt="snout" />
			{:else if trim == 'Rib'}
				<img class="general-sorter-image" src={rib} alt="rib" />
			{:else if trim == 'Spire'}
				<img class="general-sorter-image" src={spire} alt="spire" />
			{:else if trim == 'Wayfinder'}
				<img class="general-sorter-image" src={wayfinder} alt="wayfinder" />
			{:else if trim == 'Shaper'}
				<img class="general-sorter-image" src={shaper} alt="shaper" />
			{:else if trim == 'Raiser'}
				<img class="general-sorter-image" src={raiser} alt="raiser" />
			{:else if trim == 'Host'}
				<img class="general-sorter-image" src={host} alt="host" />
			{:else if trim == 'Flow'}
				<img class="general-sorter-image" src={flow} alt="flow" />
			{:else if trim == 'Bolt'}
				<img class="general-sorter-image" src={bolt} alt="bolt" />
			{:else if trim == 'Silence'}
				<img class="general-sorter-image" src={silence} alt="silence" />
			{/if}
			{trim}</Button
		>
	{/each}
</div>

<div class="content-wrapper">
	{#if selectedTrim == 'Sentry'}
		<Sentry />
	{:else if selectedTrim == 'Vex'}
		<Vex />
	{:else if selectedTrim == 'Wild'}
		<Wild />
	{:else if selectedTrim == 'Coast'}
		<Coast />
	{:else if selectedTrim == 'Dune'}
		<Dune />
	{:else if selectedTrim == 'Wayfinder'}
		<Wayfinder />
	{:else if selectedTrim == 'Raiser'}
		<Raiser />
	{:else if selectedTrim == 'Shaper'}
		<Shaper />
	{:else if selectedTrim == 'Host'}
		<Host />
	{:else if selectedTrim == 'Ward'}
		<Ward />
	{:else if selectedTrim == 'Silence'}
		<Silence />
	{:else if selectedTrim == 'Tide'}
		<Tide />
	{:else if selectedTrim == 'Snout'}
		<Snout />
	{:else if selectedTrim == 'Rib'}
		<Rib />
	{:else if selectedTrim == 'Eye'}
		<Eye />
	{:else if selectedTrim == 'Spire'}
		<Spire />
	{:else if selectedTrim == 'Flow'}
		<Flow />
	{:else if selectedTrim == 'Bolt'}
		<Bolt />
	{/if}
</div>
