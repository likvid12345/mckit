<script>
	import { current } from '../../../shared.svelte';
</script>

<div class="support-card">
	<span class="eyebrow">SUPPORT MCKIT</span>
	<h2>Enjoying the app?</h2>
	<p>
		MCKit is free and ad-free, and we'd like to keep it that way. If it's been useful, a small
		donation goes a long way toward keeping it running and adding new guides.
	</p>
	<button onclick={() => (current.page = 'premium')}>Donate to mckit</button>
</div>

<style>
	.support-card {
		padding: 1.5rem;
		background: rgba(127, 0, 255, 0.1);
		border: 1px solid rgba(127, 0, 255, 0.25);
	}

	.eyebrow {
		display: block;
		margin-bottom: 0.4rem;
		color: var(--secondary);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
	}

	h2 {
		margin: 0;
		color: white;
		font-size: 1.5rem;
		line-height: 1.3;
	}

	p {
		max-width: 600px;
		margin: 0.9rem 0 1.25rem;
		color: rgba(255, 255, 255, 0.65);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.55rem 1rem;
		border: 1px solid color-mix(in srgb, var(--secondary) 60%, transparent);
		border-radius: 7px;
		background: var(--secondary);
		color: white;
		font-size: 0.9rem;
		font-weight: 700;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			opacity 0.15s ease;
	}

	button i {
		font-size: 1rem;
		line-height: 1;
	}

	button:hover {
		transform: translateY(-1px);
		opacity: 0.9;
	}
</style>
