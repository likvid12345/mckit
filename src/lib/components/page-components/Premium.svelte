<script>
	import Header from '$lib/components/element-components/Header.svelte';
	import Button from '$lib/components/element-components/Button.svelte';
	import Footer from '../element-components/Footer.svelte';

	let { onPurchase = () => {} } = $props();

	let selectedPlan = $state('year');

	const features = [
		{
			title: 'Best Enchants',
			desc: 'Full armor, tool, and utility recommendations — everything except weapons'
		},
		{ title: 'Total Table', desc: 'Track and check off every enchanted book you still need' },
		{ title: '14 Potions', desc: 'Every brewing recipe, upgrade, and splash/lingering variant' },
		{
			title: '8 Ores',
			desc: 'Where to find them, best enchants to mine with, and Fortune drop rates'
		},
		{ title: '10 Armor Trims', desc: 'Exact locations, drop chances, and duplication recipes' },
		{ title: '22 Emerald Trades', desc: 'Every villager trade that turns items into emeralds' }
	];

	const plans = [
		{ id: 'month', label: 'Monthly', price: '$1.49', sub: 'per month' },
		{ id: 'year', label: 'Yearly', price: '$4.99', sub: 'per year', badge: 'Best value' },
		{ id: 'lifetime', label: 'Lifetime', price: '$9.99', sub: 'one-time' }
	];
</script>

<Header />
<div class="premium-wrapper">
	<h1 class="page-title">MCKit Premium</h1>
	<p class="intro">Unlock the full guide — no more guessing, no more tabbing out to a wiki.</p>

	<div class="divider"></div>

	<div class="feature-list">
		{#each features as feature, i (i)}
			<div class="feature-row">
				<span class="feature-check">✓</span>
				<div class="feature-text">
					<p class="feature-title">{feature.title}</p>
					<p class="feature-desc">{feature.desc}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="divider"></div>

	<h2 class="section-title">Choose a plan</h2>
	<div class="plan-list">
		{#each plans as plan, i (i)}
			<button
				class="plan-card"
				class:selected={selectedPlan === plan.id}
				onclick={() => (selectedPlan = plan.id)}
			>
				{#if plan.badge}
					<span class="plan-badge">{plan.badge}</span>
				{/if}
				<div class="plan-info">
					<p class="plan-label">{plan.label}</p>
					<p class="plan-sub">{plan.sub}</p>
				</div>
				<p class="plan-price">{plan.price}</p>
			</button>
		{/each}
	</div>

	<Button class="premium-button" onclick={() => onPurchase(selectedPlan)}>Unlock Premium</Button>

	<p class="fine-print">Cancel anytime. Payment is charged to your Google Play account.</p>
</div>
<Footer />

<style>
	.premium-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;

		.page-title {
			color: white;
			font-size: 2rem;
			line-height: 2.2rem;
			margin: 0;
		}

		.intro {
			color: lightgray;
			font-weight: bold;
			margin: 0;
		}

		.divider {
			height: 1px;
			background-color: #333336;
			margin: 0.25rem 0;
		}

		.feature-list {
			display: flex;
			flex-direction: column;
			gap: 0.7rem;
		}

		.feature-row {
			display: flex;
			align-items: flex-start;
			gap: 0.7rem;
		}

		.feature-check {
			flex-shrink: 0;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			background-color: rgba(127, 0, 255, 0.15);
			color: var(--secondary);
			font-weight: bold;
			font-size: 0.8rem;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 0.1rem;
		}

		.feature-text {
			display: flex;
			flex-direction: column;
			gap: 0.15rem;
		}

		.feature-title {
			color: white;
			font-weight: bold;
			font-size: 0.95rem;
			margin: 0;
		}

		.feature-desc {
			color: #a8a8a8;
			font-weight: 600;
			font-size: 0.8rem;
			margin: 0;
			line-height: 1.4;
		}

		.section-title {
			color: white;
			font-size: 1.15rem;
			margin: 0 0 0.25rem;
		}

		.plan-list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.plan-card {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.75rem;
			background-color: #242427;
			border: 1px solid #3a3a3d;
			border-radius: 0.9rem;
			padding: 0.9rem 1.1rem;
			cursor: pointer;
			text-align: left;
			transition: border-color 0.15s ease;
		}

		.plan-card.selected {
			border-color: var(--secondary);
		}

		.plan-badge {
			position: absolute;
			top: -10px;
			right: 14px;
			background-color: var(--secondary);
			color: white;
			font-size: 0.65rem;
			font-weight: bold;
			padding: 2px 8px;
			border-radius: 999px;
		}

		.plan-info {
			display: flex;
			flex-direction: column;
			gap: 0.1rem;
		}

		.plan-label {
			color: white;
			font-weight: bold;
			font-size: 0.95rem;
			margin: 0;
		}

		.plan-sub {
			color: #8a8a8d;
			font-weight: bold;
			font-size: 0.75rem;
			margin: 0;
		}

		.plan-price {
			color: white;
			font-weight: bold;
			font-size: 1.1rem;
			margin: 0;
			flex-shrink: 0;
		}

		.fine-print {
			color: #6a6a6d;
			font-size: 0.72rem;
			font-weight: bold;
			text-align: center;
			margin: 0.25rem 0 0;
		}
	}
</style>
