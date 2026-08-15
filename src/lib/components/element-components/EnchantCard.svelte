<script>
	let { name, maxLevel, description } = $props();
</script>

<div class="enchant-card">
	<div class="enchant-header">
		<h2 class="enchant-name">{name}</h2>
		<span class="level-badge">Max Level {maxLevel}</span>
	</div>
	<p class="enchant-desc">{description}</p>
</div>

<style>
	.enchant-card {
		background-color: #242427;
		border: 1px solid #3a3a3d;
		border-radius: 0.75rem;
		padding: 0.85rem 1rem;
	}

	.enchant-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.enchant-name {
		color: white;
		font-size: 1rem;
		margin: 0;
	}

	.level-badge {
		background-color: rgba(127, 0, 255, 0.15);
		color: var(--secondary);
		font-size: 0.8rem;
		font-weight: bold;
		padding: 2px 8px;
		border-radius: 999px;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.enchant-desc {
		color: #a8a8a8;
		font-weight: bold;
		font-size: 0.85rem;
		margin: 0;
		line-height: 1.4;
	}
</style>
