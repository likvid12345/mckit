<script>
	let { ingredient, potions = [] } = $props();
</script>

<div class="brewing-wrapper">
	<div class="ingredient-row">
		<div class="grid-item ingredient-slot">
			{#if ingredient?.icon}
				<img src={ingredient.icon} alt={ingredient.label} class="grid-item-icon" />
			{/if}
			<p>{ingredient?.label ?? ''}</p>
		</div>
	</div>

	<div class="arrow">↓</div>

	<div class="potions-row">
		{#each potions as potion, i (i)}
			<div class="grid-item">
				{#if potion?.icon}
					<img src={potion.icon} alt={potion.label} class="grid-item-icon" />
				{/if}
				<p>{potion?.label ?? ''}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.brewing-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
	}

	.ingredient-row {
		display: flex;
		justify-content: center;
		width: 33.333%;
	}

	.potions-row {
		display: flex;
		gap: 0.75rem;
		width: 100%;
	}

	.arrow {
		color: #6a6a6d;
		font-size: 1.1rem;
		line-height: 1;
		font-weight: bold;
	}

	.grid-item {
		background-color: #242427;
		border: 1px solid #3a3a3d;
		border-radius: 0.9rem;
		aspect-ratio: 1 / 1;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		min-width: 0;
		padding: 0.75rem;
	}

	.grid-item-icon {
		width: 32px;
		height: 32px;
	}

	.grid-item p {
		color: white;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: center;
		margin: 0;
		font-size: 0.75rem;
	}

	.ingredient-slot {
		width: 33.333%;
	}
</style>
