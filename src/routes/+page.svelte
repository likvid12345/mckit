<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { initializeConsentAndAds } from '$lib/consent';
	import { hasCompletedOnboarding } from '$lib/onboarding';
	import { current } from '../shared.svelte';
	import Welcome from '$lib/components/page-components/Welcome.svelte';
	import Main from '$lib/components/page-components/Main.svelte';
	import Terms from '$lib/components/page-components/Terms.svelte';
	import PrivacyPolicy from '$lib/components/page-components/PrivacyPolicy.svelte';

	let ready = $state(false);

	onMount(async () => {
		const completed = await hasCompletedOnboarding();
		current.page = completed ? 'main' : 'welcome';
		ready = true;

		// GDPR/UMP consent tok — mora ići pre AdMob.initialize(), koji se sad zove iznutra
		await initializeConsentAndAds();
	});
</script>

{#if ready}
	{#if current.page === null}

	{:else if current.page === 'welcome'}
		<Welcome />
	{:else if current.page === 'main'}
		<Main />
	{:else if current.page === 'terms'}
		<Terms />
	{:else if current.page === 'privacy'}
		<PrivacyPolicy />
	{/if}
{/if}
