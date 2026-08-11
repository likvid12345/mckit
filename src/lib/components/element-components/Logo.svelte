<script>
	import { current } from '../../../shared.svelte';
</script>

<p
	role="presentation"
	onclick={() => {
		current.page = 'main';
	}}
>
	mckit
</p>
