<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let { children, ...rest }: HTMLButtonAttributes & { children?: Snippet } = $props();
</script>

<button {...rest}>
	{@render children?.()}
</button>

<style>
	button {
		padding: 0.5rem;
		font-weight: bold;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		white-space: nowrap;
		min-width: fit-content;
		background-color: #3b3b3b;
		border: 1px solid #79797a;
		color: white;
	}
	.selected-button {
		background-color: white;
		border: 1px solid lightgray;
		color: black;
	}
	.premium-button {
		background-color: var(--secondary);
		color: white;
		border: 1px solid mediumpurple;
		:global(img) {
			width: 15px;
		}
	}
</style>
