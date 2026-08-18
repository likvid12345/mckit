<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { hasCompletedOnboarding } from '$lib/onboarding';
	import { current } from '../shared.svelte';
	import Welcome from '$lib/components/page-components/Welcome.svelte';
	import Main from '$lib/components/page-components/Main.svelte';
	import Premium from '$lib/components/page-components/Premium.svelte';
	import Terms from '$lib/components/page-components/Terms.svelte';
	import PrivacyPolicy from '$lib/components/page-components/PrivacyPolicy.svelte';
	onMount(async () => {
		const completed = await hasCompletedOnboarding();
		current.page = completed ? 'main' : 'welcome';
	});
</script>

{#if current.page === null}

{:else if current.page === 'welcome'}
	<Welcome />
{:else if current.page === 'main'}
	<Main />
{:else if current.page === 'terms'}
	<Terms />
{:else if current.page === 'privacy'}
	<PrivacyPolicy />
{:else if current.page == 'premium'}
	<Premium />
{/if}
