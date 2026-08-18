<script>
	import { current } from '../../../shared.svelte';
	import Logo from '$lib/components/element-components/Logo.svelte';
	import Button from '$lib/components/element-components/Button.svelte';
	import premium from '$lib/assets/general/premium.svg';
</script>

<header>
	<Logo />
	{#if current.page !== 'premium'}
		<Button
			class="premium-button"
			onclick={() => {
				//@ts-expect-error 123
				current.page = 'premium';
			}}><img src={premium} alt="premium" /> Get Premium</Button
		>
	{:else}
		<Button
			class="premium-button"
			onclick={() => {
				//@ts-expect-error 123
				current.page = 'premium';
			}}><img src={premium} alt="premium" />Buy Premium</Button
		>
	{/if}
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background-color: #242427;
	}
</style>
