<script>
	import Logo from '$lib/components/element-components/Logo.svelte';
	import { current } from '../../../shared.svelte';
</script>

<footer>
	<p>
		<Logo />
		all rights reserved
	</p>

	<span
		role="presentation"
		onclick={() => {
			//@ts-expect-error 123
			current.page = 'terms';
		}}>Terms</span
	>
	<b
		>This app is not an official Minecraft product. It is not approved by or associated with Mojang
		Studios or Microsoft.</b
	>
</footer>

<style>
	footer {
		font-size: 0.8rem;
		background-color: #242427;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		color: white;
		span {
			text-decoration: underline;
		}
		p {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 0.5rem;
		}
	}
</style>
