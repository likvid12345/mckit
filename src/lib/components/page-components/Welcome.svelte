<script>
	import Button from '../element-components/Button.svelte';
	import { current } from '../../../shared.svelte';
	let accepted = $state(false);
	let step = $state(1);
	import { setOnboardingCompleted } from '$lib/onboarding';

	async function finishOnboarding() {
		await setOnboardingCompleted();
		// @ts-expect-error 123
		current.page = 'main';
	}
</script>

<div class="welcome-wrapper">
	{#if step == 1}
		<h1>mckit</h1>
		<p>Super simple Minecraft toolkit</p>
	{:else if step == 2}
		<h1>You can learn</h1>
		<h2>How to brew potions</h2>
	{:else if step == 3}
		<h1>You can learn</h1>
		<h2>About best enchants for your items</h2>
	{:else if step == 4}
		<h1>You can learn</h1>
		<h2>How to find armor trims</h2>
	{:else if step == 5}
		<h1>You can learn</h1>
		<h2>About villager trades that give emeralds</h2>
	{:else if step == 6}
		<h1>And much more</h1>
		<p>
			This app is not an official Minecraft product. It is not approved by or associated with Mojang
			Studios or Microsoft.
		</p>

		<label class="terms-label">
			<input type="checkbox" bind:checked={accepted} />
			<p>
				I accept the
				<span
					role="presentation"
					onclick={() => {
						// @ts-expect-error 123
						current.page = 'terms';
					}}>terms</span
				>
				and

				<span
					role="presentation"
					onclick={() => {
						// @ts-expect-error 123
						current.page = 'privacy';
					}}>privacy policy</span
				>
			</p>
		</label>
	{/if}

	{#if step == 6}
		{#if !accepted}
			<Button disabled class="welcome-button">Get Started</Button>
		{:else}
			<Button class="welcome-button" onclick={finishOnboarding}>Get Started</Button>
		{/if}
	{:else}
		<Button
			class="welcome-button"
			onclick={() => {
				step++;
			}}>Next</Button
		>
	{/if}
</div>

<style>
	.welcome-wrapper {
		width: 100%;
		height: 100dvh;
		padding: 1rem;
		background-color: var(--secondary);
		h1 {
			font-size: 3rem;
			font-weight: bolder;
			color: white;
			line-height: 2rem;
			margin-top: 1rem;
		}
		h2 {
			color: whitesmoke;
			margin-top: 1rem;
		}
		p {
			color: whitesmoke;
			font-size: 1.25rem;
			font-weight: bold;
			margin-top: 1rem;
		}

		:global(.welcome-button) {
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
			padding: 1rem;
			width: 90%;
			background-color: white;
			color: black;
			font-weight: bold;
			border: 2px solid black;
			border-radius: 1rem;
		}
		.terms-label {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			position: absolute;
			bottom: 100px;
			p {
				margin-top: 0;
				span {
					text-decoration: underline;
				}
			}
		}
	}
</style>
