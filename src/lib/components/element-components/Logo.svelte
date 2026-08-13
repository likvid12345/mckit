<script>
	import logo from '$lib/assets/general/logo.svg';

	import { current } from '../../../shared.svelte';
</script>

<p
	class="logo"
	role="presentation"
	onclick={() => {
		current.page = 'main';
	}}
>
	<img src={logo} alt="logo" />
	mckit
</p>

<style>
	.logo {
		color: white;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		img {
			width: 20px;
		}
	}
</style>
