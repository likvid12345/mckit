<script>
	import '../app.css';
	import { current } from '../shared.svelte';
	import Welcome from '$lib/components/page-components/Welcome.svelte';
	import Main from '$lib/components/page-components/Main.svelte';
	import Premium from '$lib/components/page-components/Premium.svelte';
	import Terms from '$lib/components/page-components/Terms.svelte';
</script>

{#if current.page == 'welcome'}
	<Welcome />
{:else if current.page == 'main'}
	<Main />
{:else if current.page == 'premium'}
	<Premium />
{:else if current.page == 'terms'}
	<Terms />
{/if}
