<script>
	import { current } from '../../../shared.svelte';
	import Logo from '$lib/components/element-components/Logo.svelte';
	import Button from '$lib/components/element-components/Button.svelte';
</script>

<header>
	<Logo />
	<Button
		class="premium-button"
		onclick={() => {
			current.page = 'premium';
		}}>Premium</Button
	>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background-color: #242427;
		:global(.premium-button) {
			background-color: var(--secondary);
		}
	}
</style>
