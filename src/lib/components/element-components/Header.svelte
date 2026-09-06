<script>
	import Logo from '$lib/components/element-components/Logo.svelte';
	import Button from '$lib/components/element-components/Button.svelte';
	import premium from '$lib/assets/general/premium.svg';

	import { onMount } from 'svelte';

	let link = '';

	onMount(async () => {
		try {
			const response = await fetch('https://6a9983e053c0481726b963d9.mockapi.io/link');
			const data = await response.json();

			link = data[0].link;
		} catch (error) {
			console.error('Failed to fetch rate link:', error);
		}
	});

	function openRateLink() {
		if (!link) return;

		window.open(link, '_blank');
	}
</script>

<header>
	<Logo />

	<Button class="premium-button" onclick={openRateLink}>
		<img src={premium} alt="premium" />
		Rate mckit
	</Button>
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
