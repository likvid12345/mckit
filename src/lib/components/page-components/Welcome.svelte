<script>
	import Button from '../element-components/Button.svelte';
	import { current } from '../../../shared.svelte';
	import logo from '$lib/assets/general/logo.svg';
	import potions from '$lib/assets/general/potions.svg';
	import enchants from '$lib/assets/general/enchants.svg';
	import trim from '$lib/assets/general/trim.svg';
	import ore from '$lib/assets/general/ore.svg';
	import emeraldtrade from '$lib/assets/general/emeraldtrade.svg';
	import beacon from '$lib/assets/general/beacon.svg';
	import coordinates from '$lib/assets/general/coordinates.svg';
	import hotkeys from '$lib/assets/general/hotkeys.svg';
	import { setOnboardingCompleted } from '$lib/onboarding';

	let accepted = $state(false);

	// 9-slot crafting grid, center slot is the mckit mark itself
	const slots = [
		{ icon: ore, label: 'ores' },
		{ icon: potions, label: 'potions' },
		{ icon: enchants, label: 'enchants' },
		{ icon: trim, label: 'trims' },
		{ icon: null, label: 'mckit' },
		{ icon: emeraldtrade, label: 'trades' },
		{ icon: beacon, label: 'beacon' },
		{ icon: coordinates, label: 'coordinates' },
		{ icon: hotkeys, label: 'hotkeys' }
	];

	async function finishOnboarding() {
		await setOnboardingCompleted();
		// @ts-expect-error 123
		current.page = 'main';
	}
</script>

<div class="welcome-wrapper">
	<div class="scroll-area">
		<div class="crafting-grid" role="presentation">
			{#each slots as slot, i (i)}
				<div class="slot" class:center={slot.icon === null}>
					{#if slot.icon}
						<img src={slot.icon} alt={slot.label} />
					{:else}
						<img class="mark" src={logo} alt="mckit" />
					{/if}
				</div>
			{/each}
		</div>

		<h1>One kit for every Minecraft answer</h1>
		<p>
			Potions, enchants, trims, coordinates and more — all sorted into one crafting table, ready
			whenever you need it.
		</p>

		<p class="disclaimer">
			mckit isn't an official Minecraft product and isn't approved by or associated with Mojang
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
	</div>

	{#if !accepted}
		<Button disabled class="welcome-button">Get Started</Button>
	{:else}
		<Button class="welcome-button" onclick={finishOnboarding}>Get Started</Button>
	{/if}
</div>

<style>
	.welcome-wrapper {
		width: 100%;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		background-color: #18181a;
		background-image: radial-gradient(
			circle at 50% 0%,
			color-mix(in srgb, var(--secondary) 22%, transparent) 0%,
			transparent 60%
		);
		position: relative;
	}

	.scroll-area {
		flex: 1;
		overflow-y: auto;
		padding: 2rem 1.5rem 7rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.crafting-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
		width: 100%;
		max-width: 240px;
		margin-bottom: 2rem;
	}

	.slot {
		aspect-ratio: 1;
		border-radius: 0.75rem;
		background-color: #222225;
		border: 1px solid #333336;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem;
	}

	.slot img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.slot.center {
		background-color: color-mix(in srgb, var(--secondary) 20%, #222225);
		border-color: var(--secondary);
		box-shadow: 0 0 24px 2px color-mix(in srgb, var(--secondary) 55%, transparent);
		animation: pulse 2.8s ease-in-out infinite;
	}

	.slot.center img.mark {
		width: 55%;
		height: 55%;
	}

	@keyframes pulse {
		0%,
		100% {
			box-shadow: 0 0 18px 1px color-mix(in srgb, var(--secondary) 45%, transparent);
		}
		50% {
			box-shadow: 0 0 30px 4px color-mix(in srgb, var(--secondary) 70%, transparent);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.slot.center {
			animation: none;
		}
	}

	h1 {
		font-size: 1.85rem;
		font-weight: 800;
		color: white;
		line-height: 1.15;
		max-width: 22ch;
	}

	p {
		color: #b7b7bc;
		font-size: 1rem;
		font-weight: 500;
		margin-top: 0.85rem;
		max-width: 34ch;
	}

	.disclaimer {
		font-size: 0.8rem;
		color: #77777c;
		font-weight: 400;
		margin-top: 1.75rem;
		max-width: 32ch;
	}

	.terms-label {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		margin-top: 1.25rem;

		p {
			margin-top: 0;
			color: #d4d4d8;
			font-weight: 500;
			font-size: 0.9rem;
			span {
				color: white;
				text-decoration: underline;
			}
		}
	}

	:global(.welcome-button) {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		padding: 1rem;
		width: calc(100% - 2rem);
		background-color: white;
		color: black;
		font-weight: bold;
		border: 2px solid black;
		border-radius: 1rem;
	}
</style>
