<div class="achievements-wrapper">
	<div class="achievement-card">
		<div class="card-header">
			<div>
				<span class="eyebrow">GUIDES</span>
				<h1>Achievements</h1>
			</div>

			<span class="soon-badge">SOON</span>
		</div>

		<div class="divider"></div>

		<p>
			We're building a simple guide on how to get every achievement, covering all achievements from
			every dimension.
		</p>
	</div>
</div>

<style>
	.achievements-wrapper {
		padding: 1rem;
	}

	.achievement-card {
		max-width: 700px;
		padding: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.025);
	}

	.card-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.eyebrow {
		display: block;
		margin-bottom: 0.35rem;
		color: var(--secondary);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
	}

	h1 {
		margin: 0;
		color: white;
		font-size: 1.7rem;
		line-height: 1.2;
	}

	.soon-badge {
		flex-shrink: 0;
		margin-top: 0.2rem;
		padding: 0.3rem 0.65rem;
		border: 1px solid color-mix(in srgb, var(--secondary) 50%, transparent);
		border-radius: 6px;
		background: color-mix(in srgb, var(--secondary) 15%, transparent);
		color: var(--secondary);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.08em;
	}

	.divider {
		height: 1px;
		margin: 1.25rem 0;
		background: rgba(255, 255, 255, 0.07);
	}

	p {
		max-width: 600px;
		margin: 0;
		color: rgba(255, 255, 255, 0.65);
		font-size: 0.95rem;
		line-height: 1.7;
	}
</style>
