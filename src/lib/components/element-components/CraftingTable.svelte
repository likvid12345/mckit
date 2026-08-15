<script>
	let { items = [] } = $props();
</script>

<div class="grid-wrapper">
	{#each items as item, i (i)}
		<div class="grid-item">
			{#if item.icon}
				<img src={item.icon} alt={item.label} class="grid-item-icon" />
			{/if}
			<p>{item.label}</p>
		</div>
	{/each}
</div>

<style>
	.grid-wrapper {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		border-top: 1px solid #3a3a3d;
		border-left: 1px solid #3a3a3d;
		border-radius: 1rem;
		overflow: hidden;

		.grid-item {
			background-color: #242427;
			border-right: 1px solid #3a3a3d;
			border-bottom: 1px solid #3a3a3d;
			aspect-ratio: 1 / 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			flex: 1 1 33.333%;
			min-width: 0;

			.grid-item-icon {
				width: 32px;
				height: 32px;
			}

			p {
				color: white;
				font-weight: bold;
				font-size: 0.9rem;
				text-align: center;
				margin: 0;
			}
		}

		.grid-item:nth-child(1) {
			border-top-left-radius: 1rem;
		}

		.grid-item:nth-child(3) {
			border-top-right-radius: 1rem;
		}

		.grid-item:nth-child(7) {
			border-bottom-left-radius: 1rem;
		}

		.grid-item:nth-child(9) {
			border-bottom-right-radius: 1rem;
		}
	}
</style>
